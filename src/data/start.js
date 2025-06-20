import * as icons from "../icons";
import squirtel from "./textFiles/squirtel";
import rollin from "./textFiles/rollin";
import allStarTabs from "./textFiles/allStarTabs";
import commits from "./textFiles/commits";
import faq from "./textFiles/faq";

// Utility function to detect mobile devices
const isMobile = () =>
  /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

const accessories = [
  {
    title: "Calculator",
    icon: icons.calculator16,
    component: "Calculator",
    multiInstance: true,
    isDisabled: false,
  },

  {
    title: "Notepad",
    icon: icons.notepad16,
    component: "Notepad",
    multiInstance: true,
  },
];

const programs = [
  {
    title: "Accessories",
    icon: icons.folderProgram16,
    options: accessories,
  },
  {
    title: "Online Services",
    icon: icons.folderProgram16,
    options: [
      {
        title: "AOL",
        icon: icons.aol16,
        isDisabled: true,
      },
      {
        title: "Outlook98 (soon)",
        icon: icons.outlook16,
        isDisabled: false,
        component: "Outlook98",
      },
    ],
  },
  {
    title: "Entertainment",
    icon: icons.folderProgram16,
    options: [
      {
        title: "Movie Player",
        icon: icons.camera16,
        component: "VideoPlayerTest",
        data: {
          src: "",
          style: {
            marginBottom: 4,
            height: "100%",
            width: "100%",
            objectFit: "contain",
          },
        },
      },
      {
        title: "Music Player",
        icon: icons.mediacd16,
        component: "MusicPlayer",
        isDisabled: false,
      },
    ],
  },
  {
    title: "Doodle",
    icon: icons.folder16,
    isDisabled: false,
    options: [
      {
        title: "Paint Doodles",
        icon: icons.paint16,
        component: "IframeWindow",
        data: {
          src: "https://paint-normal.vercel.app/#vertical-color-box-mode",
          disableAlert: true, // Disable the alert for this iframe
          style: {
            width: "100%",
            height: "100%",
          },
        },
      },
      {
        title: "Pixel Doodles",
        icon: icons.wangimg32,
        component: "IframeWindow",
        isDisabled: false,
        data: {
          src: "https://paint-doodle-pixel.vercel.app/#vertical-color-box-mode",
          disableAlert: true,
          style: {
            width: "100%",
            height: "100%",
          },
        },
      },
      {
        title: "ASCII Banners",
        icon: icons.asciibanner16,
        component: "ASCIIText",
        isDisabled: false,
        data: {},
      },
      // Only show these options for desktop users
      ...(!isMobile()
        ? [
            {
              title: "ASCII Doodles",
              icon: icons.loaderbat16,
              component: "IframeWindow",
              isDisabled: true,
              data: {
                src: "https://example.com/ascii-doodes", // Replace with a valid URL
                creator: "https://github.com/example", // Replace with a valid creator
              },
            },
          ]
        : []),
    ],
  },
  {
    title: "Internet Explorer",
    icon: icons.internetExplorer16,
    component: "TestExplorer",
    data: {
      src: "https://myspace.windows93.net/",
      title: "Internet Explorer", // Title for the window
    },
    multiInstance: true,
  },
];

const favorites = [
  {
    title: "WebGL",
    icon: icons.folder16,
    options: [
      {
        title: "Rain Physics",
        icon: icons.webglwindow32,
        component: "TestExplorer",
        data: {
          src: "https://loklok-volume.vercel.app/gpu", // URL to load in the iframe
          title: "Internet Explorer", // Title for the window
        },
        multiInstance: false,
      },
      {
        title: "Instance Points",
        icon: icons.webglwindow32,
        component: "TestExplorer",
        data: {
          src: "https://threejs.org/examples/webgpu_instance_points.html", // URL to load in the iframe
          title: "Internet Explorer", // Title for the window
        },
        multiInstance: false,
      },
      // Only show these options for desktop users
      ...(!isMobile()
        ? [
            {
              title: "Minecraft Sim",
              icon: icons.webglwindow32,
              component: "TestExplorer",
              data: {
                src: "https://threejs.org/examples/webgl_geometry_minecraft.html", // URL to load in the iframe
                title: "Internet Explorer", // Title for the window
              },
              multiInstance: false,
            },
          ]
        : []),
    ],
  },
  {
    title: "Doodle Gallery",
    icon: icons.folder16,
    options: [
      {
        title: "Enter Gallery",
        icon: icons.doodlegallery32,
        component: "",
        isDisabled: true,
      },
      {
        title: "Submit Here",
        icon: icons.prompt16,
        component: "DoodleSubmission",
        isDisabled: false,
      },
      {
        title: "All Doodles",
        icon: icons.folderOpen24,
        component: "ExplorerWindow",
        isDisabled: false,
        data: {
          content: [
            {
              title: "Doodle 1",
              icon: "paint16",
              onDoubleClick: () =>
                window.ProgramContext.onOpen({
                  component: "ImageWindow",
                  multiInstance: true,
                  title: "Doodle Viewer",
                  icon: "paint16",
                  data: {
                    src: "/static/test1.png",
                    doodleName: "Test Doodle",
                    doodler: "cs",
                    dateSubmitted: "3/31/25",
                    doodleStatement:
                      "This is the first doodle submitted to the gallery",
                  },
                }),
            },
            {
              title: "Doodle 2",
              icon: "paint16",
              multiInstance: true,
              onDoubleClick: () =>
                window.ProgramContext.onOpen({
                  component: "ImageWindow",
                  title: "Doodle Viewer",
                  icon: "paint16",
                  multiInstance: true,
                  data: {
                    src: "/static/hydradoodle.png",
                    doodleName: "Kindled Hydra",
                    doodler: "js",
                    dateSubmitted: "4/4/25",
                    doodleStatement: "fuel the burn before the blaze begins",
                  },
                }),
            },
          ],
        },
      },
    ],
  },
  {
    title: "Media",
    icon: icons.folder16,
    options: [
      {
        title: "Good Music",
        type: "ExternalLink",
        icon: icons.mediacd16,
        isDisabled: true,
        href: "https://soundcloud.com/southbound_music/sets/best-techno?utm_source=good_techno&utm_medium=startmenu&utm_campaign=hydra98",
      },
      {
        title: "Good Movies",
        type: "ExternalLink",
        icon: icons.htmlFile16,
        href: "https://boxd.it/9UyaN",
      },
      {
        title: "Warpcast",
        type: "ExternalLink",
        icon: icons.htmlFile16,
        href: "https://warpcast.com/333walton",
      },
    ],
  },
];

export const find = [
  {
    title: "Files or Folders...",
    icon: icons.findFiles16,
    isDisabled: true,
  },
  {
    title: "Computer...",
    icon: icons.findComputer16,
    isDisabled: true,
  },
  {
    title: "On the Internet...",
    icon: icons.findOnline16,
    type: "ExternalLink",
    href: "https://google.com",
  },
  {
    title: "People...",
    icon: icons.findPeople16,
    type: "ExternalLink",
    href: "https://facebook.com",
  },
];

const games = [
  {
    title: "DOS Games",
    icon: icons.folder16,
    options: [
      {
        title: "DOOM",
        icon: icons.doom16,
        component: "Doom",
        multiInstance: true,
      },
    ],
  },
  {
    title: "Doom Wads",
    icon: icons.folder16,
    options: [
      {
        title: "coming soon...",
        icon: icons.loaderbat16,
        isDisabled: true,
      },
    ],
  },
  {
    title: "Misc.",
    icon: icons.folder16,
    options: [
      {
        title: "HydraBurn",
        icon: icons.burn16,
        component: "Burn",
        multiInstance: true,
      },
      {
        title: "ASCII Maze",
        icon: icons.maze16,
        component: "ASCIIMaze",
        multiInstance: true,
      },
      // Only show these options for desktop users
      ...(!isMobile()
        ? [
            {
              title: "GliderPro",
              icon: icons.glider16,
              component: "Glider",
              multiInstance: true,
            },
            {
              title: "Retro City",
              icon: icons.retrocity32,
              component: "",
              isDisabled: true,
              multiInstance: true,
            },
            {
              title: "Rampage World Tour",
              icon: icons.rampage16,
              component: "",
              isDisabled: true,
              multiInstance: false,
            },
          ]
        : []),
    ],
  },
  {
    title: "Minesweeper",
    icon: icons.minesweeper16,
    component: "Minesweeper",
    multiInstance: true,
  },
  {
    title: "Minesweeper2",
    icon: icons.minesweeper16,
    component: "MinesweeperWithHelp",
    multiInstance: true,
  },
  {
    title: "Solitaire",
    icon: icons.soli16,
    component: "",
    multiInstance: true,
    isDisabled: true,
  },
  //{
  //title: "SkiFree",
  //icon: icons.skifree,
  //component: "",
  //multiInstance: true,
  //isDisabled: true
  //},
  {
    title: "Space Cadet Pinball",
    icon: icons.spacecadet16,
    component: "",
    multiInstance: true,
    isDisabled: true,
  },
];

const ASCII = [
  {
    title: "ASCII Art",
    icon: icons.folder16,
    options: [
      {
        title: "Flames",
        icon: icons.burn16,
        component: "Burn",
        multiInstance: true,
      },
      {
        title: "Pipes",
        icon: icons.pipes16,
        component: "Pipes",
        multiInstance: true,
      },
      {
        title: "Hourglass",
        icon: icons.sand16,
        component: "Sand",
        multiInstance: true,
      },
      {
        title: "Squirtel",
        icon: icons.notepad16,
        component: "Notepad",
        data: {
          content: squirtel,
        },
      },
    ],
  },
  {
    title: "Demoscenes",
    icon: icons.folder16,
    options: [
      {
        title: "GleEst",
        type: "ExternalLink",
        icon: icons.htmlFile16,
        href: "https://demozoo.org/productions/288839/",
      },
      {
        title: "Micro1k",
        type: "ExternalLink",
        icon: icons.htmlFile16,
        href: "https://demozoo.org/productions/128900/",
      },
      {
        title: "Kishkoid",
        type: "ExternalLink",
        icon: icons.htmlFile16,
        href: "https://demozoo.org/productions/13245/",
      },
    ],
  },
  {
    title: "Pixel Art",
    icon: icons.folder16,
    options: [],
  },
];

const startMenuData = [
  {
    title: "Programs",
    icon: icons.folderProgram24,
    options: programs,
  },
  {
    title: "Favorites",
    icon: icons.folderFavorites24,
    options: favorites,
  },
  {
    title: "Documents",
    icon: icons.folderOpen24,
    options: [
      {
        title: "Ad Tools",
        icon: icons.faq32,
        //isDisabled: true,
        options: [
          {
            title: "UTM Tracker",
            icon: icons.logOff24,
            isDisabled: false,
            component: "UTMTool",
          },
          {
            title: "Pre-roll Toolkit",
            icon: icons.vid16,
            component: "VideoPlayerMobile",
            //isMobile ? "VideoPlayerMobile" : "VideoPlayerDesktop", //replace the left one with "VideoPlayerDesktop" after done testing
            multiInstance: true,
            isDisabled: false,
            data: {
              src: "",
            },
          },
          {
            title: "Cookie Consent",
            icon: icons.cookie16,
            href: "",
            isDisabled: true,
          },
          {
            title: "Hookscore Heatmap",
            icon: icons.vid16,
            component: "HookScoreHeatmap",
            multiInstance: true,
            isDisabled: true,
            data: {
              src: "",
            },
          },
          {
            title: "Newsletter Prompt",
            icon: icons.newsletter16,
            href: "",
            isDisabled: true,
          },
        ],
      },
      {
        title: "Help",
        icon: icons.help16,
        options: [
          {
            title: "FAQ",
            icon: icons.faq32,
            component: "Notepad",
            multiInstance: true,
            data: {
              content: faq.content,
              enableHtml: faq.enableHtml,
              readOnly: true,
            },
          },
          {
            title: "Change Log",
            icon: icons.notepadFile16,
            component: "Notepad",
            data: {
              content: commits,
            },
          },
          {
            title: "Office Assistant",
            icon: icons.textchat32,
            component: "Clippy",
            id: "clippy-assistant",
          },
          {
            title: "Demo",
            icon: icons.camera16,
            component: isMobile ? "VideoPlayerMobile" : "VideoPlayerMobile", //replace the left one with "VideoPlayerDesktop" after done testing
            multiInstance: true,
            isDisabled: true,
            data: {},
          },
        ],
      },
      {
        title: "Guitar Tabs",
        options: [
          {
            title: "Rollin",
            icon: icons.notepadFile16,
            component: "Notepad",
            data: {
              content: rollin,
            },
          },
          {
            title: "All Star",
            icon: icons.notepadFile16,
            component: "Notepad",
            data: {
              content: allStarTabs,
            },
          },
        ],
        icon: icons.folder16,
      },
    ],
  },
  {
    title: "Games",
    icon: icons.joystick24,
    options: games,
  },
  {
    title: "Artifacts",
    icon: icons.ascii24,
    options: ASCII,
  },
];

export default startMenuData;
