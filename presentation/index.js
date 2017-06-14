// Import React
import React from "react";
import mapValues from "lodash/mapValues";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  //Cite,
  CodePane,
  Deck,
  //Fill,
  Heading,
  Image,
  //Layout,
  Link,
  List,
  ListItem,
  //Markdown,
  Quote,
  Slide,
  //Table,
  //TableRow,
  //TableHeaderItem,
  //TableItem,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./custom.css");

const slideTransition = ["slide"];
const images = mapValues({
  cssHtmlJS: require("../images/css-html-js.png"),
  components: require("../images/components.jpg"),
  tracer: require("../images/tracer.jpg"),
  facade: require("../images/facade.jpg"),
  folders: require("../images/folders.jpg"),
  fractal: require("../images/fractal.jpg"),
  palm: require("../images/palm.jpg"),
  prototype: require("../images/prototype.jpg"),
  scaffolding: require("../images/scaffolding.jpg"),
  mud: require("../images/mud.jpg"),
  lasagna: require("../images/lasagna.jpg"),
  ravioli: require("../images/ravioli.jpg"),
  spaghetti: require("../images/spaghetti.jpg"),
  storybook: require("../images/storybook.gif"),
  purse: require("../images/purse.jpg"),
  swiss: require("../images/swiss.jpg"),
  view: require("../images/view.jpg"),
  survivejs: require("../images/survivejs.png"),
  atomicDesign: require("../images/atomic-design.mp4")
}, (v) => v.replace("/", ""));

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "black",
  tertiary: "#09b5c4",
  quartenary: "rgba(255, 219, 169, 0.43)"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={slideTransition} transitionDuration={500} theme={theme}>
        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            React Architecture
          </Heading>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Early Stage Techniques
          </Heading>
        </Slide>

        <Slide transition={slideTransition} bgImage={images.palm} bgDarken={0.45}>
          <Heading size={2} textColor="tertiary">
            Pretotyping
          </Heading>
          <Text>
            <Link href="https://mediainspiratorium.com/1990-2016/" textColor="white">mediaInspiratorium</Link>
          </Text>
        </Slide>

        <Slide transition={slideTransition} bgColor="black">
          <BlockQuote>
            <Quote>"Should we build it at all?" or "If we build it, will people buy it and use it?" - Alberto Savoia</Quote>
          </BlockQuote>
        </Slide>

        <Slide transition={slideTransition} bgImage={images.prototype} bgDarken={0.45}>
          <Heading size={2} textColor="tertiary">
            Prototyping
          </Heading>
          <Text>
            <Link href="https://pixabay.com/en/concept-car-forward-prototype-737341/" textColor="white">moerschy</Link>
          </Text>
        </Slide>

        <Slide transition={slideTransition} bgColor="black">
          <BlockQuote>
            <Quote>... most prototypes are built to answer questions such as, "Can we build it?" or "Will it work as expected?" - Alberto Savoia</Quote>
          </BlockQuote>
        </Slide>

        <Slide transition={slideTransition} bgImage={images.tracer} bgDarken={0.45}>
          <Heading size={2} textColor="tertiary">
            Tracer Bullets
          </Heading>
          <Text>
            <Link href="https://pixabay.com/en/submachine-gun-rifle-62902/" textColor="white">WikiImages</Link>
          </Text>
        </Slide>

        <Slide transition={slideTransition} bgColor="black">
          <BlockQuote>
            <Quote>Tracer bullets are an easy way for machine gunners to see where their bullets are going, and adjust the trajectory to make the bullets go where you want them to go - <Link href="http://wiki.c2.com/?TracerBullets" textColor="white">C2</Link></Quote>
          </BlockQuote>
        </Slide>

        <Slide transition={slideTransition} bgColor="black">
          <BlockQuote>
            <Quote>There are two ways to write error-free programs; only the third one works - Alan Perlis</Quote>
          </BlockQuote>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Recap
          </Heading>
          <List>
            <Appear><ListItem><b>Pretotype</b> before going technical</ListItem></Appear>
            <Appear><ListItem><b>Prototype</b> to see if we can build it</ListItem></Appear>
            <Appear><ListItem>Shoot <b>tracer bullets</b> through the architecture to get a better idea</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Exercises
          </Heading>
          <List>
            <Appear><ListItem>The goal of these exercises is to evaluate the approaches</ListItem></Appear>
            <Appear><ListItem>The target is to develop an e-shop. Interpret this as you like</ListItem></Appear>
            <Appear><ListItem>0. Develop a pretotype (paper with the design first!), a prototype, or design an architecture and implement a tracer bullet against it</ListItem></Appear>
            <Appear><ListItem>1. After completion, form a group with people that used the other approaches. Compare results!</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Structuring React Projects
          </Heading>
        </Slide>

        <Slide transition={slideTransition} bgColor="black">
          <BlockQuote>
            <Quote>Organizations which design systems ... are constrained to produce designs which are copies of the communication structures of these organizations - M. Conway</Quote>
          </BlockQuote>
        </Slide>

        <Slide transition={slideTransition} bgImage={images.facade} bgDarken={0.45}>
          <Heading size={1} caps textColor="primary">
            All in One
          </Heading>
          <Text>
            <Link href="https://pixabay.com/en/swiss-army-knife-knife-swiss-knife-364232/" textColor="white">flag</Link>
          </Text>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Single File
          </Heading>
          <CodePane>
            {"├── index.jsx"}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition} bgImage={images.folders} bgDarken={0.45}>
          <Heading size={1} caps textColor="primary">
            Splitting Up
          </Heading>
          <Text>
            <Link href="https://pixabay.com/en/folder-federal-folder-file-archive-626332/" textColor="white">422737</Link>
          </Text>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Directory per Concept
          </Heading>
          <CodePane>
        {`├── actions
│   └── NoteActions.js
├── components
│   ├── App.jsx
│   ├── Note.jsx
│   └── Notes.jsx
├── constants
│   └── itemTypes.js
├── index.jsx
├── libs
│   ├── alt.js
│   ├── persist.js
│   └── storage.js
├── main.css
└── stores
  └── NoteStore.js`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Components
          </Heading>
          <img src={images.storybook} height="524px" alt="Storybook" />
          <Text>
            <Link href="https://getstorybook.io/">Storybook</Link>
          </Text>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Directory per Component
          </Heading>
          <CodePane>
        {`├── actions
│   └── NoteActions.js
├── components
│   ├── App
│   │   ├── App.jsx
│   │   ├── app.css
│   │   ├── app_test.jsx
│   │   └── index.js
...
│   └── index.js
├── constants
│   └── itemTypes.js
├── index.jsx
├── libs
...
├── main.css
└── stores
  └── NoteStore.js`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition} bgImage={images.view} bgDarken={0.45}>
          <Heading size={1} caps textColor="primary">
            Views
          </Heading>
          <Text>
            <Link href="https://pixabay.com/en/man-view-from-the-roof-618344/" textColor="white">547877</Link>
          </Text>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Directory per View
          </Heading>
          <CodePane>
        {`├── components
│   ├── Note
│   │   ├── Note.jsx
│   │   ├── index.js
│   │   ├── note.css
│   │   └── note_test.jsx
│   ├── Routes
│   │   ├── Routes.jsx
│   │   ├── index.js
│   │   └── routes_test.jsx
│   └── index.js
...
├── index.jsx
├── main.css
└── views - Composed of components
  ├── Home
  │   ├── Home.jsx
  │   ├── home.css
  │   ├── home_test.jsx
  │   └── index.js
  ├── Register
  │   ├── Register.jsx
  │   ├── index.js
  │   ├── register.css
  │   └── register_test.jsx
  └── index.js`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition} bgImage={images.view} bgDarken={0.45}>
          <Link href="https://github.com/gajus/create-index">
            <Heading size={1} caps textColor="primary">
              gajus/create-index
            </Heading>
          </Link>
        </Slide>

        <Slide transition={slideTransition} bgImage={images.fractal} bgDarken={0.45}>
          <Heading size={1} caps textColor="primary">
            Fractals
          </Heading>
          <Text>
            <Link href="https://pixabay.com/en/abstract-fractal-sphere-eye-1414331/" textColor="white">MartaNemcova</Link>
          </Text>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Directory per Feature
          </Heading>
          <CodePane>
        {`├── components
...
├── features - Composed of components
│   ├── Login
│   │   ├── Login.jsx
│   │   ├── index.js
│   │   ├── login.css
│   │   └── login_test.jsx
...
├── index.jsx
├── main.css
└── views - Composed of features and components
  ├── Home
  │   ├── Home.jsx
  │   ├── home.css
  │   ├── home_test.jsx
  │   └── index.js
  ├── Register
  │   ├── Register.jsx
  │   ├── index.js
  │   ├── register.css
  │   └── register_test.jsx
  └── index.js`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Atomic Design
          </Heading>
          <video autoPlay loop margin="40px auto" height="524px">
            <source src={images.atomicDesign} />
          </video>
          <Text>
            <Link href="http://patternlab.io/">Pattern Lab</Link>
          </Text>
        </Slide>

        <Slide transition={slideTransition}>
          <Link href="https://arc.js.org/">
            <Heading size={2}>
              Atomic React
            </Heading>
          </Link>
          <CodePane>
        {`├── App.js
├── atoms
│   ├── Badge
│   │   ├── index.js
│   │   └── index.test.js
│   ├── Button
│   │   ├── index.js
│   │   └── index.test.js
...
│   ├── TableRow
│   │   ├── index.js
│   │   └── index.test.js
│   └── index.js
├── globals.js
├── index.js
├── molecules
│   ├── Blockquote
│   │   ├── index.js
│   │   └── index.test.js
...
│   ├── Table
│   │   ├── index.js
│   │   └── index.test.js
│   └── index.js
├── organisms
│   ├── FeatureList
│   │   ├── index.js
│   │   └── index.test.js
...
│   ├── Hero
│   │   ├── index.js
│   │   └── index.test.js
│   └── index.js
├── pages
│   ├── HomePage
│   │   ├── index.js
│   │   └── index.test.js
│   ├── SamplePage
│   │   ├── index.js
│   │   └── index.test.js
│   └── index.js
└── templates
  ├── PageTemplate
  │   ├── index.js
  │   └── index.test.js
  └── index.js`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition} bgImage={images.facade} bgDarken={0.45}>
          <Heading size={1} caps textColor="primary">
            Facade
          </Heading>
          <Text>
            <Link href="https://pixabay.com/en/facade-window-home-building-117288/" textColor="white">Hans</Link>
          </Text>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading fit size={2}>
            Separating State from Components
          </Heading>
          <CodePane>
        {`├── components
│   ├── App.js
│   ├── App.test.js
│   ├── Note.js
│   └── Notes.js
├── constants
│   └── itemTypes.js
├── index.js
├── main.css
└── state
  ├── Provider.js
  ├── actions.js
  ├── alt
  │   ├── Provider.js
  │   ├── actions
  │   │   ├── LaneActions.js
  │   │   ├── NoteActions.js
  │   │   └── index.js
  │   ├── alt.js
  │   ├── connect.js
  │   ├── init.js
  │   ├── persist.js
  │   └── stores
  │       ├── LaneStore.js
  │       └── NoteStore.js
  ├── connect.js
  ├── env.js
  ├── index.js
  ├── init.js
  ├── redux
  │   ├── Provider.js
  │   ├── actions
  │   │   ├── LaneActions.js
  │   │   ├── NoteActions.js
  │   │   └── index.js
  │   ├── connect.js
  │   ├── init.js
  │   ├── reducers
  │   │   ├── index.js
  │   │   ├── lanes.js
  │   │   └── notes.js
  │   └── store
  │       ├── index.js
  │       ├── store.dev.js
  │       └── store.prod.js
  └── storage.js`}
          </CodePane>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Recap
          </Heading>
          <List>
            <Appear><ListItem>Good structure works <b>with</b> you, bad structure <b>against</b> you</ListItem></Appear>
            <Appear><ListItem>Evolve as you go, {`don't`} be afraid to abstract</ListItem></Appear>
            <Appear><ListItem>Big applications are fractal (smaller applications inside bigger ones)</ListItem></Appear>
            <Appear><ListItem>Remember Conway, avoid dogma</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Exercises
          </Heading>
          <List>
            <Appear><ListItem>0. Choose an existing project (this can be the e-shop)</ListItem></Appear>
            <Appear><ListItem>1. Consider different structures against it. List pros/cons</ListItem></Appear>
            <Appear><ListItem>2. Consider what happens when new requirements show up (say the application size doubles)*</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary" fit>
            Server Side Rendering
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://survivejs.com/webpack/output/server-side-rendering/">Server Side Rendering</Link> Briefly
          </Heading>
          <List>
            <Appear><ListItem>Initial payload with HTML, state (not just app)</ListItem></Appear>
            <Appear><ListItem>Potential performance and SEO benefits</ListItem></Appear>
            <Appear><ListItem>Technical cost in terms of complexity (frontend and backend differ technically)</ListItem></Appear>
            <Appear><ListItem>Ideal - streaming rendering? Examples: <Link href="https://github.com/FormidableLabs/rapscallion">rapscallion</Link>, <Link href="https://hackernoon.com/why-is-marko-fast-a20796cb8ae3">marko</Link>, Video (30 mins): <Link href="https://www.youtube.com/watch?v=UhdGiVy3_Nk">How Streaming Can Supercharge React?</Link></ListItem></Appear>
            <Appear><ListItem><Link href="https://hackernoon.com/server-side-rendering-shootout-with-marko-preact-rax-react-and-vue-25e1ae17800f">Server-side Rendering Shootout with Marko, Preact, Rax, React and Vue</Link></ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Exercises
          </Heading>
          <List>
            <Appear><ListItem>0. Go through <Link href="https://survivejs.com/webpack/output/server-side-rendering/">SurviveJS SSR tutorial</Link></ListItem></Appear>
            <Appear><ListItem>1. Integrate <Link href="https://github.com/FormidableLabs/rapscallion">rapscallion</Link> to the project</ListItem></Appear>
            <Appear><ListItem>2. Study <Link href="https://www.npmjs.com/package/webpack-flush-chunks">webpack-flush-chunks</Link>*</ListItem></Appear>
            <Appear><ListItem>3. Learn to use <Link href="https://medium.com/webpack/how-to-use-webpacks-new-magic-comment-feature-with-react-universal-component-ssr-a38fd3e296a">code splitting with SSR</Link>**</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary" fit>
            Typing with Flow
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Link href="https://flow.org/"><Heading size={2}>
            Flow
          </Heading></Link>
          <List>
            <Appear><ListItem>Type <b>checker</b>, not a language (think as extension)</ListItem></Appear>
            <Appear><ListItem>A separate tool to run</ListItem></Appear>
            <Appear><ListItem>Limited runtime checks through Babel plugins, also erasure from production</ListItem></Appear>
            <Appear><ListItem>Value even with limited usage</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Flow Opinions
          </Heading>
          <List>
            <Appear><ListItem><Link href="http://jan.varwig.org/2017/02/15/flow-vs-typescript.html">Flow vs. Typescript</Link> (went with TypeScript)</ListItem></Appear>
            <Appear><ListItem><Link href="http://thejameskyle.com/adopting-flow-and-typescript.html">Adopting Flow & TypeScript</Link> (controversial)</ListItem></Appear>
            <Appear><ListItem><Link href="http://jaredforsyth.com/type-systems-js-dev/">Type systems will make you a better JavaScript programmer</Link></ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Flow
          </Heading>
          <List>
            <Appear><ListItem>Type <b>checker</b>, not a language (think as extension)</ListItem></Appear>
            <Appear><ListItem>A separate tool to run</ListItem></Appear>
            <Appear><ListItem>Limited runtime checks through Babel plugins, also erasure from production</ListItem></Appear>
            <Appear><ListItem>Value even with limited usage</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Exercises
          </Heading>
          <List>
            <Appear><ListItem>0. Introduce Flow to the SSR project</ListItem></Appear>
            <Appear><ListItem>1. Type the backend with Flow</ListItem></Appear>
            <Appear><ListItem>2. Type the frontend with Flow*</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary" fit>
            Monorepos
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Lerna Briefly
          </Heading>
          <List>
            <Appear><ListItem><Link href="https://lernajs.io/">Lerna</Link> is a tool for managing multiple packages</ListItem></Appear>
            <Appear><ListItem>Expects a <b>packages</b> directory</ListItem></Appear>
            <Appear><ListItem><b>lerna bootstrap</b> - Install dependencies of all packages</ListItem></Appear>
            <Appear><ListItem><b>lerna publish</b> - Update and publish changed packages</ListItem></Appear>
            <Appear><ListItem><b>lerna run</b> - Run a script on each package (say, a build script)</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Lerna Versioning Modes
          </Heading>
          <List>
            <Appear><ListItem>Fixed (think Babel)</ListItem></Appear>
            <Appear><ListItem>Independent</ListItem></Appear>
            <Appear><ListItem>Ideal? - <Link href="https://github.com/lerna/lerna/issues/298">hybrid mode</Link>. Not going to happen.</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading caps size={2}>
            The Good
          </Heading>
          <List>
            <Appear><ListItem>Monorepo avoids configuration overhead (packaging, testing)</ListItem></Appear>
            <Appear><ListItem>One repository to maintain over many - Alternative: consume configuration as a dependency</ListItem></Appear>
            <Appear><ListItem>Easier to author packages &rarr; you make more packages. Less of a problem with <Link href="https://www.npmjs.com/package/mrm">mrm</Link></ListItem></Appear>
            <Appear><ListItem>Leads to decoupled design - Logic separate from React</ListItem></Appear>
            <Appear><ListItem>Possible to write integration tests</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading caps size={2}>
            The Bad
          </Heading>
          <List>
            <Appear><ListItem>Monorepos {"aren't"} fully understood &rarr; Tooling not stable yet</ListItem></Appear>
            <Appear><ListItem>If you {"aren't"} careful, the repository can become huge (see Babel)</ListItem></Appear>
            <Appear><ListItem>Harder to contribute due to the exotic setup?</ListItem></Appear>
            <Appear><ListItem>Difficult to manage packages with different velocities (forces independent versioning)</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading caps size={2}>
            The Ugly
          </Heading>
          <List>
            <Appear><ListItem>Single issue tracker, potentially harder to manage</ListItem></Appear>
            <Appear><ListItem>No automated releases yet. Ideal: tag &rarr; CI releases for you</ListItem></Appear>
            <Appear><ListItem>Popular third party services have been designed traditional repositories in mind</ListItem></Appear>
            <Appear><ListItem>Hard to collaborate if your monorepo is private and you want to contract</ListItem></Appear>
            <Appear><ListItem>Git log can become rather large</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Exercises
          </Heading>
          <List>
            <Appear><ListItem>0. Convert the SSR project as a monorepo</ListItem></Appear>
            <Appear><ListItem>1. Add more packages (components to render) to the SSR project*</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary" fit>
            Refactoring an Existing Project to React
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Refactoring Strategies
          </Heading>
          <List>
            <Appear><ListItem>Complete rewrite - Big Bang</ListItem></Appear>
            <Appear><ListItem>Incremental rewrite - Start from a component/view</ListItem></Appear>
            <Appear><ListItem>Test old system first on high level, then port to React</ListItem></Appear>
            <Appear><ListItem>Example: <Link href="https://slack.engineering/rebuilding-slacks-emoji-picker-in-react-bfbd8ce6fbfe">Rebuilding Slack’s Emoji Picker in React</Link></ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Link href="https://www.survivejs.com/">
            <Heading size={1}>
              SurviveJS
            </Heading>
          </Link>
          <Image src={images.survivejs} margin="0px auto 40px" height="524px"/>
        </Slide>

        <Slide transition={slideTransition} bgColor="tertiary">
          <Heading size={1} caps fit textColor="primary">
            Made in Finland by
          </Heading>
          <Link href="https://twitter.com/bebraw">
            <Heading caps fit size={2} textColor="secondary">
              Juho Vepsäläinen
            </Heading>
          </Link>
        </Slide>
      </Deck>
    );
  }
}
