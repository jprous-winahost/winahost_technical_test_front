import React from "react";
import CCAAView from "./CCAAContext/Infrastructure/View/CCAAView";

const App = () => {

    const ccaaView: JSX.Element = CCAAView();

    return (
        <div>
            {ccaaView}
        </div>
    );
}

export default App;