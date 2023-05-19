

 const checkRender = (Component) => {
    console.log(Component)
}

 export const myReduxMiddleware = ({ dispatch, getState }) => next => action => {
    if(typeof action !== "function"){
        console.log("DISPATCHING:", action.type, " to store")
    }
    next(action)
}


const store = {
    state: { name: "Andrew"},
    dispatch(action){
        this.state = { ...this.state, ...action.payload }
    },
    getState(){
        return this.state
    }
}
let middlewareQueue = [];
function applyMiddleware(middleWares){
    middleWares.forEach( middleware => middlewareQueue.push(middleware))
    let oldDispatch = store.dispatch.bind(store);
    //apply middleware to store
    store.dispatch = middlewareQueue.reduce( (currentDispatchComposition, nextMiddleware) => {
        return nextMiddleware(store)(currentDispatchComposition);  
    }, oldDispatch)

}
export const createDispatchDebugMiddleware = (store) => (next) => {
    let countedActions = 0;
    let history = {
        actions: [],
        lastState: {}
    }
    const prevState = store.getState();
    // store.subscribe( (state) => {
    //     console.log(`%cStore was updated`,"color: white; font-weight:bold; background: grey;font-size: 14px; padding:10px;"  )
    //     console.log(getState());
    // })
    const stylesHeader = ['color:cyan; font-weight:bold ;font-size: 14px; padding:10px; padding-right: 0; background: grey',
    'color: orange; font-weight:bold ; font-style: italic; font-size: 14px; padding:10px; padding-left: 0; background: grey',
    'color: white; font-weight: bold;font-size: 14px; padding:10px; padding-right: 34px; background: grey']
    return (action) => {
        history.lastState = store.getState();
        const keys = Object.keys(action);
        countedActions++;
        let actionType = "";
        if(typeof action === "function"){
            actionType = action.name ? `${action.name}()`: "anonymous()"
        }else{
            actionType = action.type;
        }
      
        history.actions.push({ actionType, time: new Date().toLocaleTimeString() });
        const templateHeader = `%cDISPATCHED ACTION: %c${typeof action === 'function' ? "f()" : actionType } %c  |       TOTAL ACTIONS: ${countedActions}`

        const templateBody = `%cACTION HISTORY: %c${history.actions.reduce((out, action) => {
            return out + `${typeof action !== 'object' ? "function" : action.type }: ${action.time} \n`
        }, "\n")}`;
       
        const stylesBody = ['color: orange; font-weight:bold ; font-style: italic; font-size: 14px; padding:10px; padding-left: 0;width: "100%"',
            'color: white; font-weight: bold;font-size: 14px; padding:10px; padding-right: 34px; width: 100px']
        console.groupCollapsed(`%cACTION DISPATCHED: %c${actionType}`, 'color: red', 'color: cyan')    
        console.info(templateHeader, ...stylesHeader);
        console.table(history.actions);
        console.tab
        console.groupEnd();
        return next(action)
    }
}

// applyMiddleware([myReduxMiddleware, myReduxMiddleware]);

// store.dispatch({
//     type: "TEST",
//     payload: {
//         name: "Patrick"
//     }
// })