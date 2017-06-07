// Import React
import React from "react";
import TweetEmbed from "./tweet-embed";
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
  flux: require("../images/flux.png"),
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
          <Heading size={1}>
            Recap
          </Heading>
          <List>
            <Appear><ListItem><b>Pretotype</b> before going technical</ListItem></Appear>
            <Appear><ListItem><b>Prototype</b> to see if we can build it</ListItem></Appear>
            <Appear><ListItem>Shoot <b>tracer bullets</b> through the architecture to get a better idea</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Exercises
          </Heading>
          <List>
            <Appear><ListItem>The goal of these exercises is to evaluate the approaches</ListItem></Appear>
            <Appear><ListItem>The target is to develop a counter application that can be used to track observations. Interpret this as you like</ListItem></Appear>
            <Appear><ListItem>Develop a pretotype (paper with the design first!), a prototype, or design an architecture and implement a tracer bullet against it</ListItem></Appear>
            <Appear><ListItem>After completion, form a group with people that used the other approaches. Compare results!</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            State Management
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1} fit>
            The Problem of State
          </Heading>
          <List>
            <Appear><ListItem>Application state, UI state</ListItem></Appear>
            <Appear><ListItem>Where to push it?</ListItem></Appear>
            <Appear><ListItem>How to manipulate it?</ListItem></Appear>
            <Appear><ListItem>How to propagate changes to the UI?</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Image src={images.flux} margin="40px auto" height="324px" />
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Redux
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Redux Briefly
          </Heading>
          <List>
            <Appear><ListItem>More of a guideline</ListItem></Appear>
            <Appear><ListItem>Utilities like <Link href="http://redux.js.org/docs/api/combineReducers.html">combineReducers</Link> to manage complexity &#8594; Single tree for state</ListItem></Appear>
            <Appear><ListItem>Actions == Something happened</ListItem></Appear>
            <Appear><ListItem>Reducers == How application state changes (pure!)</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} className="redux-flow">
          <TweetEmbed id='727821044308967425' />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Redux Continued
          </Heading>
          <List>
            <Appear><ListItem>Time travel, undo, HMR support through design</ListItem></Appear>
            <Appear><ListItem><Link href="https://github.com/paularmstrong/normalizr">Normalize</Link> to make it easier to write reducers</ListItem></Appear>
            <Appear><ListItem>Extend through middleware and solutions around Redux</ListItem></Appear>
            <Appear><ListItem>Strong ecosystem</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={4}>
            Minimal <Link href="http://redux.js.org/">Redux</Link>
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../examples/redux_01.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={4}>
            <Link href="http://redux.js.org/">Redux</Link> with a Store
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../examples/redux_02.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={4}>
            Connecting Using <Link href="https://www.npmjs.com/package/react-redux">react-redux</Link> 1/3
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../examples/redux_03.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={4}>
            Connecting Using <Link href="https://www.npmjs.com/package/react-redux">react-redux</Link> 2/3
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../examples/redux_04.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={4}>
            Connecting Using <Link href="https://www.npmjs.com/package/react-redux">react-redux</Link> 3/3
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../examples/redux_05.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            <Link href="https://www.npmjs.com/package/react-redux">react-redux</Link> Recap
          </Heading>
          <List>
            <Appear><ListItem>Split application to <b>containers</b> (connect) and <b>presentational</b> components</ListItem></Appear>
            <Appear><ListItem>Push <code>connect</code> low in the hierarchy to improve performance</ListItem></Appear>
            <Appear><ListItem>Use <Link href="https://github.com/reactjs/reselect">reselect</Link> to deal with derived data</ListItem></Appear>
            <Appear><ListItem>Gotcha: <code>connect</code> is in pure mode by default, not always the right choice (routing)</ListItem></Appear>
            <Appear><ListItem>Know your tools (read their APIs and code)</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            MobX
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            MobX Briefly
          </Heading>
          <List>
            <Appear><ListItem>Modeled after spreadsheets</ListItem></Appear>
            <Appear><ListItem>Wraps data structures in observables</ListItem></Appear>
            <Appear><ListItem>Supports also <code>computed</code> data</ListItem></Appear>
            <Appear><ListItem>Mutable structures &#8594; Easier reference handling. Nested structures are fine</ListItem></Appear>
            <Appear><ListItem>Use <code>autorun</code> for side effects (logging, persistency)</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={4}>
            Minimal <Link href="https://mobxjs.github.io/mobx/">MobX</Link>
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../examples/mobx_01.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            MobX Continued
          </Heading>
          <List>
            <Appear><ListItem>Light alternative to Redux. A decent starting point.</ListItem></Appear>
            <Appear><ListItem>Less boilerplate, good performance out of the box</ListItem></Appear>
            <Appear><ListItem>More work needed for time travel, undo, serialization (<code>toJSON</code>, <code>fromJSON</code>)</ListItem></Appear>
            <Appear><ListItem>Use the right tool for the right purpose (avoid dogma)</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={4}>
            Connecting Using <Link href="https://www.npmjs.com/package/mobx-react">mobx-react</Link>
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../examples/mobx_02.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            <Link href="https://www.npmjs.com/package/mobx-react">mobx-react</Link> Recap
          </Heading>
          <List>
            <Appear><ListItem>No distinction between <b>container</b> and <b>presentational</b> components</ListItem></Appear>
            <Appear><ListItem>Annotate all components that are specific to your application</ListItem></Appear>
            <Appear><ListItem>MobX handles updating for you</ListItem></Appear>
            <Appear><ListItem>More discipline required (great power &#8594; great responsibility)</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Exercises
          </Heading>
          <List>
            <Appear><ListItem>Implement the core idea of Redux (hint: first example)</ListItem></Appear>
            <Appear><ListItem>Push application <code>state</code> (amount) to Redux</ListItem></Appear>
            <Appear><ListItem>*Add another amount to track</ListItem></Appear>
            <Appear><ListItem>**Implement a MobX variant</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Async
          </Heading>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            redux-thunk
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={4}>
            Async with <Link href="https://www.npmjs.com/package/redux-thunk">redux-thunk</Link> 1/2
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../examples/redux_async_01.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={4}>
            Async with <Link href="https://www.npmjs.com/package/redux-thunk">redux-thunk</Link> 2/2
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../examples/redux_async_02.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            <Link href="https://www.npmjs.com/package/redux-thunk">redux-thunk</Link> Recap
          </Heading>
          <List>
            <Appear><ListItem>Split query to stages (request/success/failure)</ListItem></Appear>
            <Appear><ListItem>Return a thunk and trigger stages as you call the backend</ListItem></Appear>
            <Appear><ListItem>React to stages at reducers and alter state</ListItem></Appear>
            <Appear><ListItem>Consider pushing the API client to a middleware (looser coupling)</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            redux-saga
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={4}>
            <Link href="https://www.npmjs.com/package/redux-saga">redux-saga</Link> 1/2
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../examples/redux_async_03.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={4}>
            <Link href="https://www.npmjs.com/package/redux-saga">redux-saga</Link> 2/2
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../examples/redux_async_04.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            <Link href="https://www.npmjs.com/package/redux-saga">redux-saga</Link> Recap
          </Heading>
          <List>
            <Appear><ListItem>Split query to stages (request/success/failure)</ListItem></Appear>
            <Appear><ListItem>Instead of returning a thunk, operate with generators</ListItem></Appear>
            <Appear><ListItem>Your browser might need a polyfill for generators to work</ListItem></Appear>
            <Appear><ListItem>Easier to test due to the looser coupling by default</ListItem></Appear>
            <Appear><ListItem><Link href="https://github.com/jfairbank/redux-saga-test-plan">redux-saga-test-plan</Link></ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Async in MobX
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={4}>
            Async with <Link href="https://www.npmjs.com/package/mobx">MobX</Link>
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../examples/mobx_async_01.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            <Link href="https://www.npmjs.com/package/mobx">MobX</Link> Async Recap
          </Heading>
          <List>
            <Appear><ListItem>Works thanks to observables</ListItem></Appear>
            <Appear><ListItem>Consider using a flag to signify loading stage</ListItem></Appear>
            <Appear><ListItem>Structure as you like (API client etc.). ES6 classes can work.</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            <Link href="https://facebook.github.io/relay/">Relay</Link> and <Link href="https://netflix.github.io/falcor/">Falcor</Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Exercises
          </Heading>
          <List>
            <Appear><ListItem>Set Up a Mock Response at <Link href="http://www.mocky.io/">mocky.io</Link>. <b>Important!</b> Set <code>Access-Control-Allow-Origin</code> to <code>https://codesandbox.io/</code>.</ListItem></Appear>
            <Appear><ListItem>Configure <Link href="https://www.npmjs.com/package/redux-thunk">redux-thunk</Link> and perform a query against the resource</ListItem></Appear>
            <Appear><ListItem>*Implement a <Link href="https://www.npmjs.com/package/mobx">MobX</Link> variant</ListItem></Appear>
            <Appear><ListItem>**Implement a <Link href="https://www.npmjs.com/package/redux-saga">redux-saga</Link> variant</ListItem></Appear>
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
          <Heading caps fit size={1}>
            Single File
          </Heading>
          <CodePane>
        {`├── index.jsx`}
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
          <Heading caps fit size={1}>
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
          <Heading size={1} caps>
            Components
          </Heading>
          <img src={images.storybook} height="524px" alt="Storybook" />
          <Text>
            <Link href="https://getstorybook.io/">Storybook</Link>
          </Text>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading caps fit size={1}>
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
          <Heading caps fit size={1}>
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
          <Heading caps fit size={1}>
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
          <Heading size={1} caps>
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
            <Heading caps fit size={1}>
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
          <Heading caps fit size={1}>
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
          <Heading size={1}>
            Recap
          </Heading>
          <List>
            <Appear><ListItem>Good structure works <b>with</b> you, bad structure <b>against</b> you</ListItem></Appear>
            <Appear><ListItem>Evolve as you go, {`don't`} be afraid to abstract</ListItem></Appear>
            <Appear><ListItem>Big applications are fractal (smaller applications inside bigger ones)</ListItem></Appear>
            <Appear><ListItem>Remember Conway, avoid dogma</ListItem></Appear>
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
