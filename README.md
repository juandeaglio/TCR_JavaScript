# TCR_TypeScript
This project is inspired by my first fullstack web dev project: [Book Haven, e-commerce book store](https://github.com/juandeaglio/BookStore/). Once I complete this relatively short tangent, I'll go back to working on that.
***
**Commands (as seen in package.json)**:

**test_and_commit.ps1**: This is my workflow for coding with Test && Commit || Revert. It checks for whether we can build or not, tests the code, and commits if it all succeeds, otherwise it goes back to last successful commit via Git.

Jest & Build scripts:

**test**: These are the jest tests.

**start**: This is the development server via webpack.

**build**: This is the production version served via webpack (might be more obfuscated).

Playwright scripts:

**start-serve**: This starts the development server and is part of a playwright test suite.

**test-playwright**: This waits for localhost:3000 to be accessible (if fails to start check for existing bindings on port 3000, i.e. some app is using your port 3000), it also executes playwright tests.

**test-with-server**: Concurrently executes the start-server and test-playwright (blocks until port 3000 is accessible) scripts.
***
**A code example**:

Let's imagine that in the simplest case we just need an html + tsx file. To use the HTMLPhysics API currently it only works with one pre-defined component that is decorated with BoxWithPhysics, we just inject the physics we want to use and a direction to start with, I also plan on adding a magintude parameter as the speed for which the element moves in is currently constant (10). I intend on generalizing it to any functional component or even just query selected HTML elements.

index.html
```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Test App</title>
    </head>
    <body>
        <div id="root"></div>
    </body>
</html>
```

index.tsx
```
const physics: HTMLPhysics = new HTMLPhysics();
const MAX_WIDTH: number = 1024;
const MAX_HEIGHT: number = 1024;

const TestApp = () => (
    <svg>
        <BoxWithPhysics data-testid='Box-1' windowHeight={MAX_HEIGHT} windowWidth={MAX_WIDTH} direction={Direction.Right} physics={physics} />
    </svg>
);

ReactDOM.render(<TestApp />, document.getElementById('root'));
```

***
**Current plans**:
Mirroring this on a private GitLab repo where a pipeline for building/testing/containerizing exists. This is duplicate to the GitLab because I like having the metrics of my commits all on my GitHub (haven't looked into a way which integrates metrics between the two).
[GitLab Repository](https://gitlab.com/learningtcr/TCR_TypeScript/-/pipelines)

Slowly building up the code for this as of 1/10/2024.

I'm going to re-name this project to HTML Physics. It's physics with HTML and CSS!

I'm trying to build up a system that tracks collisions between HTML elements. I want things to bounce off each other in a pretty, abstract manner.

Eventually, it's going to replace the splash screen on [my portfolio](https://juandeaglio.github.io).

I also want to simplify the code from the simplest use case so that we interact with HTML elements / React components with a builder pattern, slowly changing the object with function calls rather than one huge constructor and to create a higher abstraction which creates the entire environment and generates boxes as needed for testing purposes.
***
**The methodology**:
<ins>Everything is designed with tests in Jest.</ins>

I'm approaching this problem from a test-first perspective. I want to test collisions between html elements, and the reactive directions of travel when one element hits another. An equal and opposite reaction.

I'm writing component level tests in React Testing Library which integrate between React components & class based JavaScript. I also unit-test those functional components within Jest.

However, testing things on the DOM and trying to find real-world precision of animations & transforms isn't easily possible in React Testing Library, that's where Playwright comes in.

Thankfully all of it is used with Jest.
***
**Where does the movement come from?**
Unit tests test the inner-workings of how new transforms are generated into CSS, testing the correct angle and magnitude of a 2-d vector.
The correct CSS transform is generated based on HTMLPhysics.
***
**A blog in the works**:
With this project, I'm making a blog. I'll upload my deepest inner-most thoughts soon, so that everyone is familiar with the evil magical conjurations required to make such a system (Evil programming things like, do I temporarily break out of TCR to fix a dumb typo? Or do I create a generic "Controller" class which "controls" things?).
In the blog, I document my daily struggles, approaches to the code, and think about how I'll structure it when I'm making tests. Things like how do I form classes, how do I split apart responsibilities and allow modularity?
