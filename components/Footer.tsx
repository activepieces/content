import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pb-4 text-gray-200 bg-black pt-10 mt-10">
      <div className="max-w-5xl xl:max-w-5xl mx-auto divide-y divide-gray-900 px-4 sm:px-6 md:px-8">
        <ul className="text-sm font-medium sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
          <li className="space-y-5 row-span-2">
            <h2 className="text-2xl tracking-wide text-white">Company</h2>
            <ul className="space-y-4 text-md">
              <li>
                <Link
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="https://handbook.activepieces.com/"
                >
                  Handbook
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  Investors
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  Brand
                </Link>
              </li>
            </ul>
          </li>
          <li className="space-y-5 row-span-2">
            <h2 className="text-2xl tracking-wide text-white">Docs</h2>
            <ul className="space-y-4">
              <li>
                <Link
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </li>
          <li className="space-y-5 row-span-2">
            <h2 className="text-2xl tracking-wide text-white">Industries</h2>
            <ul className="space-y-4">
              <li>
                <Link
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  Marketing
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  Sales
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  E Commerce
                </Link>
              </li>
            </ul>
          </li>
          <li className="space-y-5">
            <h2 className="text-2xl tracking-wide text-white">Connect</h2>
            <ul className="space-y-4">
              <li>
                <Link
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors duration-200 text-xl"
                  href="/"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white transition-colors duration-200 font-semibold text-xl"
                  href="/"
                >
                  Discord
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="flex flex-col-reverse justify-between pt-5 pb-4 border-t lg:flex-row bg-top border-black">
          <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <Link
                href="/"
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Ad Choices
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Cookie Policy
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <Link
              href="/"
              className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight"
            >
              © 2023 Activepieces Inc.
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}
