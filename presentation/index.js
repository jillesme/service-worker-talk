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
  goal: require('../assets/goal.jpg'),
  onion: require('../assets/onion.jpg'),
  underground: require('../assets/busy-metro.jpg'),
  offline: require('../assets/offline.png'),
  swLifecycle: require('../assets/sw-lifecycle.png')
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

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Service Worker
            </Heading>
            <Heading size={1} fit caps>
              Offline and Performant Web Apps
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary" notes="You can even put notes on your slide. How awesome is that?">

            <Layout>
              <Fill>
                <List>
                  <ListItem>Jilles Soeters</ListItem>
                  <ListItem>Developer Expert at Google</ListItem>
                  <ListItem>Front-end developer at Xebia</ListItem>
                  <Text>Tweets @jilles, blogs @ jilles.me</Text>
                </List>
              </Fill>
              <Fit>
                  <Image src={images.me.replace("/", "")} width="400px" />
              </Fit>
            </Layout>

          </Slide>

          <Slide transition={["slide"]} bgImage={images.goal.replace('/', '')}>
          </Slide>

          <Slide transition={["slide"]}>
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

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1}>What about AppCache?</Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={4}>AppCache's Amazing Features™</Heading>
            <List>
              <Appear>
                <ListItem>Doesn't load non-cached items (even when online!)</ListItem>
              </Appear>
              <Appear>
                <ListItem>Only updates if the manifest.json changes (not the files!)</ListItem>
              </Appear>
              <Appear>
                <ListItem>Just a config file (no JavaScript!)</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgImage={images.onion.replace('/', '')}></Slide>

          <Slide transition={["slide"]} bgColor="tertiary">
            <Heading fit size={2} textColor="primary">
              Why use a Service Worker?
            </Heading>
            <List>
              <Appear>
                <ListItem>You want your website to load faster (after the initial load)</ListItem>
              </Appear>
              <Appear>
                <ListItem>You want to be able to send push notifications</ListItem>
              </Appear>
              <Appear>
                <ListItem>You want your website to be available offline</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading fit size={2}>
              One of the Netherlands' biggest webshop stated that more than
            </Heading>

            <Fill>
              <Heading size={1}>25%</Heading> 

              <Text>of all their traffic comes from Chrome for Android</Text>
            </Fill>
          </Slide>

          <Slide transition={["slide"]} bgImage={img('underground')}>
          </Slide>

          <Slide transition={"slide"} bgColor="white">
            <Image src={images.offline} height="600px" />
          </Slide>

          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={require("raw!../assets/registering.js.demo")}
            ranges={[
              { loc: [0, 10], note: 'index.html'},
              { loc: [0, 1], note: 'Feature detection' },
              { loc: [1, 3], note: 'Register Service Worker' },
              { loc: [3, 5], note: 'Registration success' },
              { loc: [5, 8], note: 'Registration fail' },
              { loc: [0, 10] }
            ]}/>

          <Slide transition={["slide"]} bgColor="white">
            <Image src={images.swLifecycle} height="500px" />
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
