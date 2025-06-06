import * as icons from "../icons";
import readme from "./textFiles/readme";

const isMobile = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return (
    /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      userAgent
    ) || window.innerWidth < 1024
  );
};

const desktopData = [
  {
    title: "Computer",
    icon: icons.computer32,
    component: "ExplorerWindow",
    maximizeOnOpen: false, // Prevent maximizing on mobile
    data: {
      content: [
        {
          title: "(C:)",
          icon: "cd32",
          failState: {
            message:
              "This is a React App, there is no CD drive, your laptop probably doesn't have one either",
            loadTime: 4000,
          },
        },
        {
          title: "(D:)",
          icon: "hdd32",
          failState: {
            message: "This is a React App, there is no hard drive",
            loadTime: 1000,
          },
        },
        {
          title: "3 1/2 Floppy (A:)",
          icon: "floppy32",
          failState: {
            message:
              "Did everyone else's computer take ages to load the 'no floppy disc inserted' message or was that just mine?",
            loadTime: 8000,
          },
        },
      ],
    },
  },
  {
    title: "Read Me",
    icon: icons.htmlFile32,
    component: "InternetExplorer",
    data: {
      __html: readme,
    },
  },
  {
    title: "DOOM",
    icon: icons.doom32,
    component: "Doom",
  },
  {
    title: "Paint",
    icon: icons.paint32,
    component: "IframeWindow",
    data: {
      src: "https://paint-normal.vercel.app/#vertical-color-box-mode",
      disableAlert: true, // Disable the alert for this iframe
      style: {
        width: "100%",
        height: "100%",
      },
    },
    multiInstance: true,
  },
  // REMOVED: Office Assistant entry - this has been removed so we can add it in DesktopView.js
  {
    title: "Recycle",
    icon: icons.recycleempty32, // Default icon (This will be overridden in the component using state)
    component: "RecycleBin",
    className: "recycle-icon", // Apply the CSS class
  },
  // Conditionally add any mobile-specific icons/components here
  ...(!isMobile() ? [] : []),
];

export default desktopData;
