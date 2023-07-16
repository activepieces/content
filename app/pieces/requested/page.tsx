
import { Metadata } from "next";
import firebase from 'firebase/app';
import firebaseAuth, { signInWithPopup } from 'firebase/auth';

interface Issue {
  id: number;
  title: string;
  body: string;
  votes: number,
  html_url: string;
}

const fetchData = async () => {
  const perPage = 100; // Number of results per page
  let page = 1; // Starting page number
  let allIssues: Issue[] = []; // Array to store all issues
  try {
    while (true) {
      const response = await fetch(
        `https://api.github.com/repos/activepieces/activepieces/issues?q=is%3Aissue+is%3Aopen+label%3A"🔌+pieces"&page=${page}&per_page=${perPage}`
      );

      if (response.ok) {
        const issues = await response.json();

        if (issues.length === 0) {
          // No more issues, break the loop
          break;
        }

        allIssues = allIssues.concat(issues);
        page++;
      } else {
        console.error('Error fetching GitHub issues:', response.status);
        break;
      }
    }

    return allIssues;
  } catch (error) {
    console.error('Error fetching GitHub issues:', error);
  }
};


const login = async () => {
  try {
    const provider = new firebaseAuth.GoogleAuthProvider();
    await signInWithPopup(firebaseAuth.getAuth(), provider);
    // Handle successful login
  } catch (error) {
    // Handle login error
  }
};

export default async function GithubIssues() {
  const issues = await fetchData();

  const vote = async (issueId: number) => {
    // Check if the user is logged in
    const user = firebaseAuth.getAuth().currentUser;
    if (!user) {
      // User is not logged in, show login prompt
      await login();
      return;
    }

    // Perform the vote using the user's authentication information
    // Add your voting logic here

    // Example: Update the issue with the vote
    const updatedIssues = issues.map((issue: Issue) => {
      if (issue.id === issueId) {
        return { ...issue, votes: issue.votes + 1 };
      }
      return issue;
    });

    // Update the state with the updated issues
    // Update your state management logic here
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {issues.map((issue: Issue) => (
        <div
          key={issue.id}
          className="bg-white shadow-lg p-4 rounded-lg flex flex-col"
        >
          <h2 className="text-lg font-semibold mb-2">{issue.title}</h2>
          <p>Votes: {issue.votes}</p>
          <button>Vote</button>
          <a
            href={issue.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            View Issue
          </a>
        </div>
      ))}
    </div>
  );
}

