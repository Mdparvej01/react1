
        // const heading=React.createElement("h1",{id:"pzsheading"},"Hello world from react");

        // const root = ReactDOM.createRoot(document.getElementById("root"));

        // root.render(heading);

        const parent=React.createElement( "div", {id:"parent"},
       [ React.createElement( "div", {id:"child1"}, 
        [React.createElement( "h1", {id:"parents1"},  "iam h1 tag "),React.createElement( "h1", {id:"parents1"},  "iam h2 tag ")]
        ),React.createElement( "div", {id:"child2"}, 
        [React.createElement( "h1", {id:"parents1"},  "iam h1 tag "),React.createElement( "h1", {id:"parents1"},  "iam h2 tag ")]
        )]
        );

        const root=ReactDOM.createRoot(document.getElementById("root"));

        root.render(parent);




        

  