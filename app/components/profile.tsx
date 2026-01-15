import Image from "next/image";

function Profile() {
  return (
    <div className="w-full md:w-[40%] lg:w-[30%] h-full">
      <div className="bg-neutral-100 dark:bg-neutral-900 text-amber-950 dark:text-amber-100 rounded rounded-md p-5 flex flex-col w-full items-center shadow-lg/10 gap-4 top-0 md:sticky">
        <div className="w-50 md:w-30 lg:w-50 relative h-auto aspect-square">
          <Image
            src="/squareprofile.jpeg"
            objectFit="cover"
            fill={true}
            alt="Picture of Caleb Cassin"
            className="rounded-full"
          />
        </div>
        <h4 className="text-2xl">Caleb Cassin</h4>
        <div className="flex flex-row text-sm flex-wrap gap-3 justify-center items-center">
          <div>Junior Software Engineer</div>
          <div>Nashville, TN</div>
        </div>
        <div className="flex flex-row gap-3">
          <a
            href="https://www.linkedin.com/in/caleb-cassin/"
            target="_blank"
            className="p-2 rounded-lg flex items-center justify-center border border-gray-300 bg-neutral-100 dark:bg-neutral-800 dark:border-gray-800 transition-all duration-500 hover:border-gray-200 hover:bg-amber-200 dark:hover:bg-amber-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 72 72"
              fill="none"
            >
              <path
                d="M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z"
                className="fill-gray-800 dark:fill-neutral-100"
              ></path>
            </svg>
          </a>
          <a
            href="https://github.com/WolferTamer"
            target="_blank"
            className="p-2 rounded-lg flex items-center justify-center border border-gray-300 bg-neutral-100 dark:bg-neutral-800 dark:border-gray-800 transition-all duration-500 hover:border-gray-200 hover:bg-amber-200 dark:hover:bg-amber-900"
          >
            <svg
              width="1.5em"
              height="1.5em"
              viewBox="0 0 96 96"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                className="fill-gray-800 dark:fill-neutral-100"
              />
            </svg>
          </a>
          <a
            href="mailto:calebbcassin@gmail.com"
            className="p-2 rounded-lg flex items-center justify-center border border-gray-300 bg-neutral-100 dark:bg-neutral-800 dark:border-gray-800 transition-all duration-500 hover:border-gray-200 hover:bg-amber-200 dark:hover:bg-amber-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 72 72"
              fill="none"
              className="[&>*]:fill-gray-800 [&>*]:dark:fill-neutral-100"
            >
              <path d="M11.9362 56.1235H20.4189V35.5227L8.30078 26.434V52.4881C8.30078 54.4997 9.93067 56.1235 11.9362 56.1235Z"></path>
              <path d="M49.5025 56.1235H57.9853C59.9969 56.1235 61.6207 54.4936 61.6207 52.4881V26.434L49.5025 35.5227"></path>
              <path d="M49.5025 19.7693V35.5227L61.6207 26.434V21.587C61.6207 17.0912 56.4887 14.5282 52.8956 17.2245"></path>
              <path d="M20.4189 35.5227V19.769L34.9607 30.6754L49.5025 19.7693V35.5227L34.9607 46.429"></path>
              <path d="M8.30078 21.587V26.434L20.4189 35.5227V19.769L17.0259 17.2245C13.4268 14.5282 8.30078 17.0912 8.30078 21.587Z"></path>
            </svg>
          </a>
        </div>
        <div className="flex flex-col rounded-md bg-neutral-200 dark:bg-neutral-800 w-full p-1 text-sm md:text-xs lg:text-sm">
          <div
            className="border-b p-2 flex flex-row gap-2"
            title="Phone Number"
          >
            <svg
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z"
                className="stroke-gray-800 dark:stroke-neutral-100"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div>+1 (805) 895 4330</div>
          </div>
          <div className="border-b p-2 flex flex-row gap-2" title="Email">
            <svg
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
                className="fill-gray-800 dark:fill-neutral-100"
              />
            </svg>
            <div>calebbcassin@gmail.com</div>
          </div>
          <div className="p-2 flex flex-row gap-2" title="Birthday">
            <svg
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                className="stroke-gray-800 dark:stroke-neutral-100"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <div>09/02/2002</div>
          </div>
        </div>
        <div>
          <a
            className="p-3 bg-amber-400 dark:bg-amber-600 rounded-sm hover:bg-amber-500 transition-all duration-100"
            href="/UpdatedResume.pdf"
            download="CalebCassinResume.pdf"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
