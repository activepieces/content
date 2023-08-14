import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Tables } from "./supabase";

export const getStars = async () => {
  try {
    const repo = await fetch("https://api.github.com/repos/activepieces/activepieces", {
      next: { revalidate: 3600 }
    });
    const repoData = await repo.json();
    const stars = repoData.stargazers_count;
    return stars;
  } catch (ex) {
    return 0;
  }

}
export const getContributorsCount = async () => {
  try {
    const repo = await fetch("https://api.github.com/repos/activepieces/activepieces/contributors?per_page=1", {
      next: { revalidate: 3600 }
    });
    const repoData = await repo.headers.get('Link');
    //<https://api.github.com/repositories/573661753/contributors?per_page=1&page=2>; rel="next",
    //<https://api.github.com/repositories/573661753/contributors?per_page=1&page=53>; rel="last"
    const contributors = repoData?.split(',')[1].split(';')[0].split('&')[1].split('=')[1].slice(0, -1);
    return contributors;
  } catch (ex) {
    return 0;
  }

}
export const getDiscordMembers = async () => {
  const discord = await fetch("https://discord.com/api/v9/invites/fA8hYBFkHd?with_counts=true&with_expiration=true", {
    next: { revalidate: 3600 }
  });
  const discordData = await discord.json();
  const members = discordData.approximate_member_count;
  return members;
}
export type GitHubIssue = {
  id: string,
  title: string,
  created_at: string,
  labels: {
    name: string;
  }[];
  state: "open" | "closed";
  assignees: unknown[];
  number: number
};

export interface GithubCreateIssueRequest {
  title: string
  body: string
}
export const getPiecesIssuesOnGithub = async () => {
  let currentPage = 1;
  let issues: GitHubIssue[] = [];
  const per_page = 100;
  while (true) {
    const issuesRequest = await fetch(`https://api.github.com/repos/activepieces/activepieces/issues?state=all&per_page=${per_page}&page=${currentPage}&labels=🔌%20pieces`, {
      next: { revalidate: 1 },
      headers: {
        'Authorization': "Bearer " + process.env.GITHUB_TOKEN,
      }
    });
    const issuesLink = await issuesRequest.headers.get('Link');
    currentPage++;
    const issuesPage: GitHubIssue[] = await issuesRequest.json();
    if (!Array.isArray(issuesPage)) {
      break;
    }
    const issuesThatAreNotBugs = issuesPage.filter(is => is.labels.findIndex(l => l.name === ('🐛 bug')) === -1);
    issues.push(...issuesThatAreNotBugs);
    if (!issuesLink?.includes('rel="next"')) {
      break;
    }
  }
  return issues;
}

export const getSupabaseVotes = async () => {
  const supabase = createServerComponentClient({ cookies })
  const { data }: { data: Tables<'voting'>[] | null } = await supabase.from('voting').select('*')
  return data;

}