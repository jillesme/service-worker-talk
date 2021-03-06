import React from 'react'; 
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import preloader from 'spectacle/lib/utils/preloader';

import createTheme from 'spectacle/lib/themes/default';

// CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
  me: require('../assets/jilles.jpg'),
  netherlands: require('../assets/netherlands.jpg'),
  goal: require('../assets/goal.jpg'),
  onion: require('../assets/onion.jpg'),
  underground: require('../assets/busy-metro.jpg'),
  undergroundHappy: require('../assets/busy-metro-happy.jpg'),
  offline: require('../assets/offline.png'),
  swLifecycle: require('../assets/sw-lifecycle.png'),
  applePie: require('../assets/static-apple-pie.png'),
  buildingBlocks: require('../assets/Happy-kid-playing-toy-blocks.jpg'),
  lighthouse: require('../assets/lighthouse.png')
};

const img = (name) => images[name].replace('/', '');

preloader(images);

const theme = createTheme({
  primary: '#ff4081'
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>

        <Deck transition={["zoom", "slide"]} transitionDuration={500}>

          <Slide transition={["zoom"]} bgColor="primary" notes="Who has browsed the web on a mobile device, with a slow or no connection?">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Service Worker
            </Heading>
            <Heading size={1} fit caps>
              Offline and Performant Web Apps
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary" notes="Having a fairly unique name is great for Twitter / blogs but every non-Dutch person will give you a variation of your name you haven't heard before">

            <Layout>
              <Fill>
                <List>
                  <ListItem>Jilles Soeters</ListItem>
                  <ListItem>Developer Expert at Google</ListItem>
                  <ListItem style={{marginbottom: '20px'}}>Front-end consultant at Xebia</ListItem>
                  <Text>Tweets @jilles, blogs @ jilles.me</Text>
                </List>
              </Fill>
              <Fit>
                  <Image src={images.me.replace("/", "")} width="400px" />
              </Fit>
            </Layout>

          </Slide>

          <Slide transition={["slide"]} bgImage={images.goal.replace('/', '')} notes="Goal is to get you excited about Service Worker"></Slide>

          <Slide transition={["slide"]} notes="Start with metric, this is millions of users, Chrome for Android supports Service Worker now">
            <Heading fit size={2}>
              One of the Netherlands' biggest webshop stated that more than
            </Heading>

            <Fill>
              <Heading size={1}>25%</Heading> 

              <Text>of all their traffic comes from Chrome for Android</Text>
            </Fill>
          </Slide>

          <Slide transition={["slide"]} bgImage={img('netherlands')} notes="Netherlands has good cellular coverage"></Slide>

          <Slide transition={["slide"]} bgImage={img('underground')} notes="Underground people. They represent people on bad / no connection"></Slide>

          <Slide transition={["slide"]} bgColor="white" notes="They see this, fun dinosaur game but want to browse the web / store">
            <Image src={images.offline} height="600px" />
          </Slide>

          <Slide transition={["slide"]} bgColor="primary" notes="This is where Service Worker comes into play!">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Service Worker
            </Heading>
          </Slide>

          <Slide transition={["slide"]} notes="JS Worker own thread, no DOM acces. Proxy to manipulate requests and responses">
            <Heading size={3}>What is a Service Worker?</Heading>

            <List>
              <Appear>
                <ListItem>JavaScript worker</ListItem>
              </Appear>
              <Appear>
                <ListItem>Doesn't need webpage to be open</ListItem>
              </Appear>
              <Appear>
                <ListItem>Client side JavaScript proxy</ListItem>
              </Appear>
              <Appear>
                <ListItem>Only works on HTTPS (and localhost)</ListItem>
              </Appear>
              <Appear>
                <ListItem>Allows for offline webpages !!!!!!!</ListItem>
              </Appear>
              <Appear>
                <ListItem>Progressive enhancement</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary" notes="AppCache already allows for offline web pages">
            <Heading size={1}>What about AppCache?</Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary" notes="5 cat photos, cache 3, online show 3.">
            <Heading size={4}>AppCache's Amazing Features™</Heading>
            <List>
              <Appear>
                <ListItem>Doesn't load non-cached items when online again</ListItem>
              </Appear>
              <Appear>
                <ListItem>Only updates if the manifest.json changes</ListItem>
              </Appear>
              <Appear>
                <ListItem>Just a config file (no JavaScript)</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={"slide"} bgColor="white" notes="Useful for if you want your interactive Apple Pie recepie available on your iPhone">
            <Image src={images.applePie} height="600px" />
          </Slide>

          <Slide transition={["slide"]} bgImage={images.onion.replace('/', '')} notes="The ApplicationCache spec is like an onion: it has many many layers, and as you peel through them you’ll be reduced to tears."></Slide>

          <Slide transition={["slide"]} bgColor="tertiary" notes="push notifications more app like, user re-engaging, background sync for optimistic updates">
            <Heading fit size={2} textColor="primary">
              Why use a Service Worker?
            </Heading>
            <List>
              <Appear>
                <ListItem>You want your website to be available offline</ListItem>
              </Appear>
              <Appear>
                <ListItem>You want your website to load faster on consecutive visits</ListItem>
              </Appear>
              <Appear>
                <ListItem>You want to be able to send push notifications</ListItem>
              </Appear>
              <Appear>
                <ListItem>You want to save a request for a better time (backgroundSync)</ListItem>
              </Appear>
            </List>
          </Slide>

          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={require("raw!../assets/registering.js.demo")}
            ranges={[
              { loc: [0, 10], title: 'index.html'},
              { loc: [0, 1], title: 'Feature detection' },
              { loc: [1, 3], title: 'Register Service Worker' },
              { loc: [3, 5], title: 'Registration success' },
              { loc: [5, 8], title: 'Registration fail' }
            ]}/>

          <Slide transition={["slide"]} bgColor="white" notes="Managed by Chrome's memory model, idle listening to fetch or message">
            <Image src={images.swLifecycle} height="500px" />
          </Slide>

          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={require("raw!../assets/service-worker.js.demo")}
            ranges={[
              { loc: [0, 1], title: 'Listen to the install event' },
              { loc: [1, 2], title: 'Delay event completion' },
              { loc: [2, 3], title: 'Open a cache' },
              { loc: [3, 9], title: 'Cache requests' },
              { loc: [0, 13] },

              { loc: [14, 15], title: 'Listen to the fetch event' },
              { loc: [15, 16], title: 'Respond with our own response' },
              { loc: [16, 17], title: 'Search all the caches' },
              { loc: [17, 21], title: 'Respond from cache' },
              { loc: [22, 23], title: 'Respond from network' },
              { loc: [14, 27] }
            ]}/>

          <Slide transition={["slide"]} notes="This is all you need to have a simple offline web app">
            <CodePane
              lang="js"
              source={require("raw!../assets/service-worker.js.demo")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["slide"]} notes="video of web app working offline, using navigator.onLine for some nice checks">
            <video controls src={require('file!../assets/housing-com-sw.mp4')} style={{height: '70vh'}}></video>
          </Slide>

          <Slide transition={["slide"]} notes="This is cool, but is it more useful than a dinosaur game?">
            <Heading>Ok, cool but..</Heading>
          </Slide>

          <Slide transition={["slide"]} bgImage={img('underground')} notes="The underground people can see your web app but it doesn't really do anything."></Slide>

          <Slide transition={["slide"]} notes="We did precaching with the cache.addAll, now runtime caching">
            <Heading>Runtime caching!</Heading>
          </Slide>

          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={require("raw!../assets/service-worker-fetch.js.demo")}
            ranges={[
              { loc: [14, 15], title: 'In our fetch event' },
              { loc: [22, 23] },
              { loc: [24, 25], title: 'Clone the request' },
              { loc: [25, 26], title: 'Do something with the fetch result' },
              { loc: [26, 27], title: 'Clone the response' },
              { loc: [27, 28], title: 'Open a new cache' },
              { loc: [28, 29], title: 'Save the request & repsonse', note: 'like cache.addAll' },
              { loc: [30, 31], title: 'Return the result' },
            ]}/>

          <Slide transition={["slide"]} notes="Next up showing a video of going offline after runtime">
            <video controls src={require('file!../assets/Housing-Progressive-Loading.mp4')} style={{height: '70vh'}}></video>
          </Slide>

          <Slide transition={["slide"]} bgImage={img('undergroundHappy')} notes="This makes underground people happy. Better than a dinosaur game"></Slide>

          <Slide transition={["slide"]} bgImage={img('buildingBlocks')} notes="I have been lying, this is not a production ready service worker.."></Slide>

          <Slide transition={["Slide"]} notes="Node module for your build process, generates a SW and updates caches for new files">
            <Heading>sw-precache</Heading>
          </Slide>

          <Slide transition={["Slide"]} notes="Helper library for your Service Worker, gives it Express like routing">
            <Heading>sw-toolbox</Heading>
          </Slide>

          <Slide transition={["slide"]} notes="networkFirst goes to the network first and caches it. cacheFirst goes to the cache first. networkOnly / cacheOnly">
            <CodePane
              lang="js"
              source={require("raw!../assets/service-worker-toolbox.js.demo")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["slide"]} notes="Title is offline and performant web-apps. We've made it offline using SW and faster because loading from cache is faster than loading from network. But there is more.">
            <Heading>Lighthouse</Heading>
          </Slide>

          <Slide transition={["slide"]} notes="Extension and cli for creating PWAs. Collecting modern performance metrics">
            <Image src={img('lighthouse')} width="100%" />
          </Slide>

          <Slide transition={["slide"]} bgImage={img('goal')} notes="Remember the goal? Get you excited about ServiceWorker."></Slide>

          <Slide transition={["slide"]}>
            <Heading>Thank you!</Heading>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
