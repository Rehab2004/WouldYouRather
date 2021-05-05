<h1> would you Rather</h1>

Get the Project from starter code from here <span>https://github.com/udacity/reactnd-project-would-you-rather-starter</span>

<h3>Tools</h3>
<p>1-node.js</p>
<p>2-react library</p>
<p>3-redux library</p>

<h4>start</h4>

<p>1-install npm</p>
    npm install
   
<p>2-install yarn package</p>
   npm i yarn

<p> run development server</p>
   
   yarn start

<p> arrange files</p>

   <p>the state tree is represented in three slices</p>
     users,questions,authedUser
     <p> according to Redux the state is located at store and to update it, it is needed an action to hit a reducer which is responsible for making the update </p>

<p>src</p>
      <p>actions</p>
                <p>authoredUser</p>
               <p>shared</p>
                <p>questions</p>
               <p> users</p>
        <p>components</p>
               <p>App</p>
                ..........
     <p> middleware</p>
               <p>index</p>
              <p> logger </p>         
     <p> reducers </p>         
              <p> authoredUser</p>
              <p> index</p>
               <p>questions</p>
               <p>users</p>
     <p> index.js </p>        
         

<p>install redux,redux-thunk,react-redux </p>
   npm i redux redux-thunk react-redux

<p> in index.js import App component , createStore from redux
     then create store with combineReducer and applyMiddleware
     const store=createStor(reducers,middlewaew</p>

<p>wrap App with <Provider> component from react-redux library,this component will stick store in it's context and provides it to App as a props 
   <P><Provider store={store}>
         <App/>
         </Provider></p>
   </p>
<p> to connect each component to store we use connect() from react-redux,it converts normal react component to container one</p>

<p> connect() envokes another function (mapStateToProps),to get needed data to component</p>

<p> throw project you will use store state which is provided from redux, but also you will need to use react state</p>

<p> install react-router to wrap components with Route to navigate between them</p>

    npm i react-router-dom


       