

import { ActionBase, GetPiece, TriggerBase } from "../../../utils/piece-helper";
import Image from "next/image";
import TriggerOrActionCard from "../../../components/pieces/TriggerOrActionCard";
import { Metadata } from "next";
import { NavigationProps } from "../../../components/navigationProps";
import Link from "next/link";
import { AutomateWithActivepieces } from "../../../components/animated-curtains/AutomateWithActivepieces";
import { redirect } from 'next/navigation'



export async function generateMetadata(
  { params }: NavigationProps,
): Promise<Metadata> {
  try {
    const pieceName = params.id;
    const pieceData = await GetPiece(`@activepieces/piece-${pieceName}`);
    if (pieceData) {
      const title = `${pieceData.displayName} Integrations - Connect your apps with Activepieces`
      const description = `Connect ${pieceData.displayName} to hundreds of apps to automate your business. Activepieces is trusted by thousands of users who automate their everyday tasks.`
      return {
        title: title,
        description: description,
        openGraph: {
          title: title,
          description: description,
          siteName: "Activepieces",
          images: [
            {
              url: "https://www.activepieces.com/meta1.png",
              width: 1200,
              height: 630,
              alt: "Activepieces",
            }
          ],
          url: "https://www.activepieces.com/pieces/" + pieceName,
        },
        icons: "/favicon.ico",
      }
    }
    return {}
  }
  catch (ex) {
    console.error((ex));
    return {

    }
  }



}

export default async function PiecePage({ params }: NavigationProps) {
  const pieceName = params.id;

  const pieceData = await GetPiece(`@activepieces/piece-${pieceName}`);
  if (!pieceData) {
    redirect('/404')
  }
  const actions: ActionBase[][] = [[], []];
  Object.values(pieceData.actions).forEach((action, i) => {
    if (i % 2 === 0) {
      actions[0].push(action);
    } else {
      actions[1].push(action);
    }
  });
  const triggers: TriggerBase[][] = [[], []];
  Object.values(pieceData.triggers).forEach((trigger, i) => {
    if (i % 2 === 0) {
      triggers[0].push(trigger);
    } else {
      triggers[1].push(trigger);
    }
  });

  return (
    <>
      <article className="relative">
        <div className="absolute md:hidden -left-[3px] -top-[45px]">
          <svg width="106" height="151" viewBox="0 0 106 151" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.3704 63.5754C-22.7414 77.0956 -52.4107 93.9477 -49.8984 101.215L-47.5324 100.397C-49.801 93.8361 -20.9925 77.9224 16.8121 64.8537C54.6175 51.7852 87.1031 46.5104 89.3712 53.0716L91.7366 52.253C89.2243 44.986 55.4817 50.0554 16.3704 63.5754Z" fill="#FF8B25" />
            <path d="M17.1416 65.806C-19.261 78.3899 -47.0795 93.4838 -44.9935 99.5196L-29.7264 94.2417C-31.0525 90.406 -9.45243 79.4573 18.5184 69.7883C46.4893 60.1193 70.2395 55.3908 71.5656 59.2265L86.8322 53.949C84.7456 47.9136 53.5445 53.2225 17.1416 65.806Z" fill="#FFD025" />
            <path d="M61.5849 61.091C69.4526 83.8512 57.3799 108.68 34.6202 116.547C11.8602 124.415 -12.9684 112.343 -20.8366 89.5828C-28.7042 66.8226 -16.6316 41.994 6.12864 34.1263C28.8881 26.2584 53.7172 38.3307 61.5849 61.091Z" fill="#7578F4" />
            <path d="M61.7337 61.5269C69.3591 84.3695 57.0233 109.068 34.1812 116.694C11.339 124.319 -13.36 111.984 -20.9858 89.1413C-28.6112 66.2988 -16.2755 41.5998 6.5671 33.9745C29.4089 26.3489 54.1083 38.6844 61.7337 61.5269Z" fill="#7578F4" />
            <path d="M23.5165 109.127C18.3644 110.847 13.4524 110.039 12.5454 107.323C11.6392 104.607 15.0803 101.012 20.2329 99.2918C25.3853 97.5722 30.2971 98.379 31.2037 101.095C32.1099 103.811 28.669 107.406 23.5165 109.127ZM34.8619 79.1222C33.7771 75.8731 28.839 74.5941 23.8327 76.265C18.8267 77.9364 15.6481 81.9251 16.7329 85.1742C17.8179 88.4237 22.7553 89.7026 27.7613 88.0311C32.7676 86.3602 35.947 82.3717 34.8619 79.1222ZM-8.89903 65.4378C-3.59535 63.6673 0.018694 60.1761 -0.827741 57.6416C-1.67369 55.1068 -6.65948 54.4883 -11.9634 56.2583C-17.2681 58.0294 -20.8824 61.5202 -20.036 64.0546C-19.19 66.5894 -14.2037 67.2089 -8.89903 65.4378ZM13.8514 44.7777C18.2494 43.3097 21.3231 40.6433 20.7144 38.8224C20.1071 37.0014 16.0487 36.7159 11.6502 38.1842C7.25164 39.6524 4.17903 42.3195 4.78692 44.1402C5.3948 45.9609 9.45319 46.2465 13.8514 44.7777ZM52.5604 45.9223C51.1318 45.7682 49.5682 45.9195 48.009 46.4401C43.4965 47.9462 40.754 51.91 41.8834 55.2938C43.013 58.6769 47.5867 60.1982 52.0997 58.6918C55.0508 57.7069 57.2351 55.6684 58.0844 53.4309C56.5021 50.7004 54.6398 48.1954 52.5604 45.9223ZM33.7692 48.6443C32.9231 46.1116 28.5792 45.2785 24.0667 46.7847C19.554 48.2916 16.5819 51.5662 17.4273 54.1C18.2732 56.6335 22.6168 57.4661 27.1295 55.9592C31.642 54.4531 34.6146 51.1781 33.7692 48.6443ZM40.4541 90.624C40.8637 91.8514 43.8697 91.9534 47.169 90.852C50.4672 89.7512 52.8093 87.8633 52.4 86.6365C51.9899 85.4094 48.9834 85.3077 45.6846 86.4088C42.3859 87.5099 40.0445 89.3967 40.4541 90.624ZM60.152 82.8142C60.4813 83.8012 61.5499 84.427 62.9751 84.6293C63.4564 82.4345 63.7643 80.1936 63.9003 77.9265C61.242 79.1428 59.6098 81.1895 60.152 82.8142ZM-9.20716 93.8339C-3.03514 91.7739 1.13067 87.5969 0.0989554 84.505C-0.933526 81.413 -6.77373 80.5767 -12.9458 82.6366C-16.7402 83.9037 -19.7699 85.9707 -21.3065 88.0929C-21.199 88.4436 -21.1025 88.7942 -20.9857 89.144C-20.3511 91.0448 -19.5875 92.866 -18.7274 94.6159C-16.2442 95.2434 -12.7848 95.0284 -9.20716 93.8339ZM59.1798 70.3571C58.4382 68.1358 53.9328 67.6391 49.1165 69.2472C44.2998 70.8548 40.9963 73.9594 41.7376 76.1802C42.479 78.4022 46.9854 78.8984 51.8015 77.2911C56.6183 75.6827 59.9214 72.5783 59.1798 70.3571ZM49.9724 100.847C45.7232 102.266 42.7951 104.967 43.4334 106.879C43.8798 108.215 45.952 108.809 48.6091 108.563C51.5363 106.074 54.1038 103.232 56.2533 100.114C54.5914 99.8352 52.3271 100.061 49.9724 100.847ZM2.32891 73.4083C3.01421 75.4599 7.43621 75.8326 12.2066 74.2406C16.9762 72.6484 20.2883 69.6936 19.6038 67.6421C18.9185 65.5905 14.4965 65.2179 9.72664 66.8108C4.95702 68.403 1.64438 71.3569 2.32891 73.4083ZM38.7055 38.7899C39.8146 38.42 40.7846 37.8742 41.565 37.2319C38.5919 35.5794 35.4302 34.2744 32.1455 33.3498C31.2749 34.4492 30.9205 35.6886 31.2932 36.8046C32.033 39.0204 35.3518 39.9097 38.7055 38.7899ZM-12.0197 46.804C-8.25661 45.5478 -5.60357 43.3362 -6.09518 41.8644C-6.19142 41.5761 -6.40333 41.3396 -6.70692 41.1515C-8.94564 42.9257 -10.987 44.9032 -12.8124 47.0477C-12.5497 46.9735 -12.2862 46.8928 -12.0197 46.804ZM4.37723 107.782C3.84655 106.193 -0.437837 106.192 -5.19387 107.78C-6.06417 108.071 -6.88908 108.395 -7.65427 108.739C-5.77868 110.31 -3.77558 111.711 -1.67451 112.942C2.22307 111.36 4.84613 109.186 4.37723 107.782Z" fill="#A3B6FC" />
            <path d="M24.8436 88.2659C-12.9615 101.335 -45.4468 106.61 -47.7149 100.049L-50.0806 100.867C-47.5691 108.134 -13.8258 103.065 25.2853 89.5442C64.3973 76.0245 94.0662 59.1727 91.5547 51.9059L89.1887 52.7236C91.4572 59.2845 62.6482 75.1972 24.8436 88.2659Z" fill="#FF8B25" />
            <path d="M23.1391 83.3318C-4.83182 93.0008 -28.582 97.7293 -29.9078 93.8941L-45.1747 99.1711C-43.0881 105.207 -11.8867 99.8981 24.5154 87.3144C60.9185 74.7302 88.7371 59.6363 86.6508 53.6013L71.3839 58.8784C72.7098 62.7149 51.1099 73.6628 23.1391 83.3318Z" fill="#FFD025" />
          </svg>
        </div>
        <div className="absolute md:hidden right-[5px] top-[50px]">
          <svg width="92" height="94" viewBox="0 0 92 94" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.7353 69.533C17.0054 73.9409 17.5557 80.5391 21.9652 84.2691C26.3739 87.9999 32.968 87.4396 36.7012 83.0408C40.4337 78.6412 45.5773 66.8401 53.1966 55.7852C60.1364 45.2743 75.3009 22.4633 75.3009 22.4633C75.3009 22.4633 55.0032 42.0311 45.4615 49.5549C36.169 56.9814 24.4654 65.1235 20.7353 69.533Z" fill="#E13643" />
            <path d="M22.9965 68.1489C18.2232 71.3987 16.9893 77.904 20.2399 82.6782C23.4906 87.4508 29.9958 88.6741 34.7684 85.4339C39.5426 82.1938 47.581 73.2082 56.9001 62.6769C66.4631 51.9682 88.2072 32.7867 88.2072 32.7867C88.2072 32.7867 59.0492 47.5156 51.3406 53.8775C43.7079 60.2204 27.77 64.8974 22.9965 68.1489Z" fill="#E13643" />
            <path d="M35.2874 72.7209C35.7037 73.2066 35.6466 73.937 35.1618 74.3525C34.6761 74.7687 33.9465 74.7125 33.5302 74.2269C33.1147 73.742 33.1702 73.0115 33.6558 72.5953C34.1407 72.1798 34.8719 72.2361 35.2874 72.7209Z" fill="black" />
            <path d="M40.5684 61.8019C40.9432 62.2393 40.8918 62.897 40.4553 63.2712C40.0179 63.646 39.3608 63.5954 38.986 63.158C38.6118 62.7214 38.6618 62.0636 39.0991 61.6888C39.5357 61.3146 40.1942 61.3653 40.5684 61.8019Z" fill="black" />
            <path d="M52.1198 58.7091C52.4317 59.073 52.389 59.6204 52.0256 59.9318C51.6617 60.2437 51.1148 60.2016 50.8029 59.8377C50.4915 59.4743 50.5331 58.9268 50.897 58.6149C51.2604 58.3035 51.8084 58.3457 52.1198 58.7091Z" fill="black" />
            <path d="M58.9254 47.0858C59.1252 47.3189 59.0979 47.6696 58.8651 47.869C58.632 48.0688 58.2817 48.0419 58.0819 47.8087C57.8824 47.576 57.9091 47.2253 58.1422 47.0255C58.3749 46.826 58.726 46.8531 58.9254 47.0858Z" fill="black" />
            <path d="M73.9795 39.6959C74.141 39.8843 74.1188 40.1677 73.9307 40.3289C73.7423 40.4904 73.4592 40.4686 73.2977 40.2802C73.1365 40.0921 73.158 39.8087 73.3464 39.6472C73.5345 39.486 73.8183 39.5078 73.9795 39.6959Z" fill="black" />
            <path d="M84.4753 28.9278C84.5752 29.0444 84.5615 29.2196 84.4452 29.3193C84.3287 29.4192 84.1536 29.4057 84.0537 29.2892C83.954 29.1728 83.9673 28.9976 84.0838 28.8977C84.2002 28.798 84.3756 28.8115 84.4753 28.9278Z" fill="black" />
            <path d="M35.6008 73.7861C37.2077 78.062 35.0432 82.8312 30.7673 84.4382C26.4924 86.0447 21.7236 83.8813 20.1167 79.6053C18.5097 75.3294 20.6732 70.5606 24.948 68.9541C29.2239 67.3471 33.9938 69.5102 35.6008 73.7861Z" fill="black" />
            <path d="M29.5177 71.4654C29.76 72.11 29.1378 72.412 28.654 72.1925C28.1681 71.9738 27.4865 72.2957 27.0609 72.0531C26.6357 71.8116 27.334 71.4531 27.4626 71.1677C27.8657 70.2793 29.275 70.8197 29.5177 71.4654ZM25.4411 81.6336C25.1384 80.4754 24.253 80.3813 22.9379 79.9623C21.9786 79.6553 21.7412 78.7389 20.7221 78.5187C20.3507 78.4394 20.1444 78.8258 20.0326 79.3469C20.0615 79.4334 20.0827 79.519 20.1152 79.6053C21.0442 82.0773 23.032 83.8365 25.3674 84.5761C25.3865 83.7469 25.675 82.5343 25.4411 81.6336ZM32.2689 74.5148C30.7654 74.6105 28.8009 75.0813 29.3519 76.5474C29.9454 78.1265 27.4849 78.5879 28.8091 79.2284C30.1322 79.8694 31.2326 79.5908 31.9724 79.2459C32.7133 78.9006 32.2555 78.2165 32.9529 77.0436C33.6493 75.8711 33.772 74.4181 32.2689 74.5148ZM19.5933 76.5632C20.1024 76.8145 20.4565 76.33 20.8145 75.3832C21.3839 73.8729 22.3045 74.1775 24.0114 73.1992C25.5342 72.3265 24.1486 71.6422 23.7139 69.5474C21.1737 71.0164 19.6396 73.7064 19.5933 76.5632ZM24.6624 75.1093C24.2108 75.8007 22.6338 75.0569 23.089 76.6272C23.5448 78.196 23.949 78.9123 24.9318 78.6767C25.915 78.4422 26.8155 78.347 27.1636 76.9564C27.5105 75.5662 27.7304 75.6173 27.2298 74.4666C26.7314 73.3151 25.171 74.3272 24.6624 75.1093ZM31.1077 69.0986C30.7692 70.2947 30.2761 71.516 30.9291 72.1923C31.6969 72.9897 31.7615 72.631 33.5001 72.4457C35.2381 72.262 33.5883 73.7514 34.426 74.9092C35.2598 76.0636 35.2315 78.8905 35.7421 79.1716C36.2772 77.47 36.2745 75.5862 35.5982 73.7865C34.7721 71.5883 33.1085 69.9542 31.1077 69.0986ZM29.5191 68.6024C28.2695 68.3448 26.9481 68.3684 25.6513 68.7293C25.5588 69.1435 25.5641 69.578 25.8044 69.7808C26.2961 70.1991 28.4757 69.408 28.8498 69.6881C29.0752 69.8576 29.3415 69.175 29.5191 68.6024ZM34.5341 81.5712C34.1669 81.0891 33.7049 80.5586 33.2207 80.1569C32.2006 79.3097 32.1192 80.5295 31.4615 80.8181C30.8028 81.107 30.0452 81.2397 28.6959 81.2117C27.3466 81.1838 27.4862 81.7332 27.9363 82.9698C28.2516 83.8411 28.0638 84.3057 27.5653 84.9624C28.6254 85.0006 29.7113 84.8357 30.7672 84.4388C32.3357 83.8494 33.6152 82.831 34.5341 81.5712Z" fill="black" />
            <path d="M21.4442 68.402C17.0596 72.1597 16.5505 78.7619 20.3089 83.1474C24.0666 87.5319 30.6681 88.0297 35.0535 84.2818C39.439 80.5339 44.3774 69.9988 55.6812 60.0043C66.9855 50.0095 80.9229 27.2195 80.9229 27.2195C80.9229 27.2195 57.8172 44.3019 48.0392 51.0874C38.262 57.8728 25.8288 64.6443 21.4442 68.402Z" fill="#E13643" />
            <path d="M32.6945 73.3468C31.7739 72.2726 30.1581 72.15 29.0858 73.069C28.0116 73.9896 27.8874 75.6034 28.808 76.6776C29.727 77.7499 31.3424 77.8761 32.4166 76.9555C33.4889 76.0365 33.6135 74.4192 32.6945 73.3468Z" fill="black" />
            <path d="M51.0914 54.3328C50.6124 53.774 49.7719 53.7102 49.214 54.1883C48.6552 54.6672 48.5906 55.5068 49.0695 56.0656C49.5476 56.6235 50.388 56.6891 50.9468 56.2102C51.5047 55.7321 51.5694 54.8907 51.0914 54.3328Z" fill="black" />
            <path d="M63.2234 50.3402C63.006 50.0865 62.6244 50.0575 62.3711 50.2746C62.1174 50.4921 62.088 50.8732 62.3055 51.127C62.5225 51.3802 62.9041 51.41 63.1578 51.1926C63.4111 50.9755 63.4405 50.5935 63.2234 50.3402Z" fill="black" />
            <path d="M72.6565 36.2793C72.4842 36.0782 72.1817 36.0553 71.981 36.2273C71.7799 36.3996 71.7566 36.7017 71.929 36.9028C72.101 37.1036 72.4034 37.1272 72.6045 36.9549C72.8052 36.7828 72.8285 36.4801 72.6565 36.2793Z" fill="black" />
            <path d="M85.052 26.9822C84.9209 26.8293 84.691 26.8118 84.5383 26.9426C84.3854 27.0737 84.3677 27.3034 84.4988 27.4563C84.6296 27.6089 84.8595 27.6269 85.0124 27.4958C85.1651 27.365 85.1828 27.1348 85.052 26.9822Z" fill="black" />
          </svg>

        </div>


        <main className="flex min-h-screen flex-col items-center bg-planets-bg bg-no-repeat md:bg-contain lg:bg-cover lg:bg-100 bg-center-top px-4 lg:px-0">
          {pieceData && (
            <div className="flex flex-col items-center justify-center w-full pt-[80px]">
              <div className="flex flex-col items-center justify-center gap-12">
                <div className="bg-[#FFF] p-[26.669px] items-start rounded-[32px]">
                  <Image
                    src={pieceData.logoUrl}
                    alt={pieceData.displayName}
                    height={100}
                    width={100}
                    className="object-contain"
                  ></Image>
                </div>

                <section>
                  <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-center  text-white">
                    {pieceData.displayName} Integrations
                  </h1>

                  <p className="text-center text-lg mt-10 max-w-[700px]  text-white">
                    Activepieces lets you connect {pieceData.displayName} with the most
                    popular apps, so you can automate your work and have more time for
                    what matters most - no code required.
                  </p>
                </section>


                <section >
                  <Link className=" h-14 p-5 bg-white rounded justify-center items-center gap-3 inline-flex" href={"https://cloud.activepieces.com/sign-up"} target="_blank" rel="noopener noreferrer" >
                    <div className="text-center text-black  font-bold text-2sm leading-loose tracking-wide flex gap-2 items-center">Start for free</div>
                  </Link>
                </section>
              </div>

              <svg width="160" className="mt-[70px] md:hidden" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 80C0 35.8169 35.8185 0 80.0016 0C124.185 0 160 35.8169 160 80C160 124.181 124.185 160 80.0016 160C35.8185 160 0 124.181 0 80Z" fill="#F13DC9" />
                <path d="M4.18985 80.0022C4.18985 38.1334 38.1314 4.1918 80.0002 4.1918C121.871 4.1918 155.811 38.1334 155.811 80.0022C155.811 121.871 121.871 155.812 80.0002 155.812C38.1314 155.812 4.18985 121.871 4.18985 80.0022Z" fill="#F13DC9" />
                <path d="M11.0661 80.0034C11.0661 41.9322 41.9306 11.0661 80.0018 11.0661C118.073 11.0661 148.938 41.9322 148.938 80.0034C148.938 118.075 118.073 148.938 80.0018 148.938C41.9306 148.938 11.0661 118.075 11.0661 80.0034Z" fill="#F13DC9" />
                <path d="M67.5757 22.978C63.2878 20.6677 59.328 18.0579 55.2033 15.7919C62.8996 12.8161 71.2567 11.1681 80.002 11.1681C83.6307 11.1681 87.1897 11.4549 90.6663 11.9953C96.2392 14.1852 101.784 16.4067 106.818 19.8421C108.19 20.777 109.407 21.788 110.527 22.8481C111.754 24.9429 112.792 26.9727 113.148 28.7475C113.823 32.1258 116.68 34.1873 120.216 35.23C121.434 36.916 122.724 38.5972 124.196 40.2294C126.353 42.6237 128.565 44.9815 130.753 47.3584C130.927 51.6003 130.793 55.7456 131.271 57.1828C131.816 58.8102 136.055 58.8387 140.232 58.4473C140.718 59.0906 141.21 59.734 141.679 60.3916C143.764 63.3104 146.269 66.0153 147.979 69.1623C148.538 72.6943 148.838 76.3151 148.838 80.0056C148.838 95.9449 143.406 110.605 134.31 122.273C133.794 113.203 133.604 104.094 133.068 95.0543C132.754 89.7682 132.144 84.5945 131.018 79.4193C130.083 75.125 130.465 70.9275 129.658 66.6776C128.042 58.1494 123.415 49.9175 116.771 44.3619C112.578 40.8553 108.42 41.0343 103.663 39.1645C99.6794 37.6005 95.9017 35.3694 92.048 33.5123C84.0427 29.6507 75.4131 27.1993 67.5757 22.978ZM118.198 83.7246C115.031 75.3247 108.623 68.5839 105.024 60.5009C101.498 52.5859 98.4529 45.8831 90.9119 40.879C83.3455 35.8591 73.3468 33.8102 64.5206 32.2383C55.0813 30.5571 45.3155 28.3989 35.7636 27.2801C30.956 31.3177 26.7046 35.9985 23.1519 41.1944C23.171 41.2086 23.1916 41.2229 23.2106 41.2387C30.0068 46.5645 40.0705 47.8559 48.1345 50.4547C63.8282 55.5127 80.986 58.4156 93.7213 69.7295C99.7301 75.0696 101.476 84.3172 103.798 91.6808C106.484 100.201 107.729 109.149 107.978 118.062C108.203 126.145 108.526 134.249 109.318 142.291C112.85 140.627 116.213 138.664 119.385 136.447C121.36 127.489 122.405 118.392 122.458 109.184C122.505 100.642 121.223 91.7505 118.198 83.7246ZM89.6965 133.564C88.6491 120.799 87.3434 108.111 84.4373 95.6264C81.4678 82.8673 77.7424 72.7719 66.3302 65.1739C61.3103 61.832 55.0908 59.0574 49.3308 57.1812C42.0322 54.8059 34.1917 55.5253 26.7204 53.2055C23.8095 52.3007 20.8701 51.247 17.9117 50.2534C16.6472 52.8886 15.5602 55.6236 14.6348 58.4299C15.1498 58.6295 15.6648 58.8149 16.1845 59.0304C20.6324 60.867 25.1485 62.9333 29.2114 65.5272C32.5691 67.6712 35.1441 70.5931 38.3687 72.8813C44.1603 76.9933 51.5588 78.9391 57.7592 82.5092C63.7949 85.9858 70.5959 91.3686 74.5114 97.1587C78.9911 103.781 80.9179 112.838 81.9764 120.66C82.4185 123.94 83.8224 128.98 83.1648 132.195C82.4407 135.742 78.8342 138.256 77.8708 141.804C77.3098 143.877 77.1038 146.27 77.1022 148.767C78.0641 148.807 79.0307 148.84 80.002 148.84C85.922 148.84 91.6646 148.09 97.1472 146.685C96.3438 141.655 94.1571 137.157 89.6965 133.564ZM62.5732 126.18C61.849 121.046 60.9981 114.648 58.0048 110.203C55.2588 106.126 50.2372 103.682 46.4833 100.64C39.4193 94.9181 23.8286 88.5544 11.9014 90.036C12.2769 92.6014 12.7903 95.1209 13.44 97.5865C15.4683 97.4518 17.5393 97.8289 18.9449 99.3993C19.3236 99.8239 19.78 100.236 20.2759 100.64C21.8954 100.791 23.5623 101.081 25.3085 101.564C29.2351 102.648 33.1602 104.17 36.4355 106.631C41.3255 110.301 39.5587 113.445 40.8216 118.707C41.5727 121.834 42.1733 124.959 42.7374 128.085C44.7973 129.746 46.7274 131.603 47.713 133.693C48.6764 135.735 48.9268 138.594 48.8586 141.384C53.2463 143.615 57.8971 145.408 62.7649 146.663C64.2528 140.02 63.4716 132.565 62.5732 126.18Z" fill="#2C29B1" />
                <path d="M113.143 28.7445C113.818 32.1212 116.677 34.1843 120.212 35.227C122.155 35.8006 124.297 36.07 126.401 36.07C129.766 36.07 130.523 41.7935 130.75 47.3538C130.924 51.5941 130.789 55.7426 131.268 57.1782C131.813 58.8072 136.05 58.8357 140.227 58.4443C141.973 58.2795 143.708 58.045 145.158 57.82C138.825 39.209 124.765 24.1729 106.78 16.5701C107.9 18.6095 109.302 20.7582 110.522 22.8419C111.749 24.9383 112.787 26.9681 113.143 28.7445Z" fill="#EEEEEF" />
                <path d="M47.7145 133.687C46.7289 131.599 44.7973 129.74 42.7374 128.078C39.3654 125.357 35.6495 123.167 35.1694 121.374C34.3961 118.486 37.7855 110.877 35.1694 108.798C32.821 106.933 24.6145 104.174 20.2775 100.633C19.7815 100.229 19.3252 99.8169 18.9464 99.3922C17.5409 97.8219 15.4699 97.4448 13.4416 97.5795C18.4853 116.721 31.5676 132.589 48.8586 141.379C48.9267 138.59 48.678 135.731 47.7145 133.687Z" fill="#EEEEEF" />
              </svg>
              <h2 className="lg:w-[855px] text-center text-white text-[50px] lg:text-[80px] md:leading-[90px]  md:text-4xl   font-bold tracking-wider my-[150px]">Explore what you can do with {pieceData.displayName}</h2>
              <div className={Object.keys(pieceData.triggers).length === 0 ? "hidden " : "text-yellow leading-[50px] lg:leading-[60px] font-normal gap-5 text-[50px] lg:text-[80px] flex   mb-[45px] lg:mb-[50px]  text-center items-center justify-center"}>
                <Image
                  src="../trigger.svg"
                  alt="Triggers"
                  width={25}
                  height={45}

                />
                Triggers

              </div>

              {
                <div className="flex gap-4 w-full max-w-[1016px] flex-wrap ">
                  <div id="triggersFirstColumn" className="flex gap-4 flex-col  grow shrink basis-full md:basis-0">
                    {triggers[0].map((trigger) => (
                      (
                        <TriggerOrActionCard
                          key={trigger.name}
                          triggerOrAction={trigger}
                          logoUrl={pieceData.logoUrl}
                          pieceName={pieceData.name}
                          pieceVersion={pieceData.version}
                        ></TriggerOrActionCard>
                      )
                    ))}
                  </div>

                  <div id="triggersSecondColumn" className="flex gap-4 flex-col grow shrink basis-full md:basis-0">
                    {triggers[1].map((trigger) => (
                      (
                        <TriggerOrActionCard
                          key={trigger.name}
                          triggerOrAction={trigger}
                          logoUrl={pieceData.logoUrl}
                          pieceName={pieceData.name}
                          pieceVersion={pieceData.version}
                        ></TriggerOrActionCard>
                      )
                    ))}
                  </div>

                </div>
              }
              <div className={Object.keys(pieceData.actions).length === 0 ? "hidden" :
                "text-[#3cffb4]  leading-[50px] lg:leading-[80px] gap-5 text-[50px] lg:text-[80px]  text-center flex  items-center justify-center mb-[45px] lg:mb-[50px]" +
                (Object.keys(pieceData.triggers).length === 0 ? "" : " mt-[150px]")}>
                <Image
                  src="../action.svg"
                  alt="Actions"
                  width={51.125}
                  height={51.125}

                />
                Actions
              </div>

              {
                <div className="flex gap-4 w-full max-w-[1016px] mb-[150px] flex-wrap">
                  <div id="actionsFirstColumn" className="flex gap-4 flex-col basis-full md:basis-0 grow shrink">
                    {actions[0].map((action) => (
                      (
                        <TriggerOrActionCard
                          key={action.name}
                          triggerOrAction={action}
                          pieceName={pieceData.name}
                          pieceVersion={pieceData.version}
                          logoUrl={pieceData.logoUrl}
                        ></TriggerOrActionCard>
                      )
                    ))}
                  </div>

                  <div id="actionsSecondColumn" className="flex gap-4 flex-col basis-full md:basis-0 grow shrink">
                    {actions[1].map((action) => (
                      (
                        <TriggerOrActionCard
                          key={action.name}
                          triggerOrAction={action}
                          logoUrl={pieceData.logoUrl}
                          pieceName={pieceData.name}
                          pieceVersion={pieceData.version}
                        ></TriggerOrActionCard>
                      )
                    ))}
                  </div>

                </div>
              }
            </div>
          )}

        </main>
        <AutomateWithActivepieces></AutomateWithActivepieces>
      </article >

    </>);
}
