import React from "react";

class TabContent extends React.Component{
    state = {
        index: 0,
        isShow: false
    }

    
    static getDerivedStateFromProps(next: any, pre: any){
        console.log(next);
        console.log(pre);
        return {};
    }
    shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean {
        console.log(nextProps);
        console.log(nextState);
        console.log(nextContext);
        return false;
    }
    UNSAFE_componentWillMount(): void {
        console.log('will un mount')
    }
    componentDidMount(): void {
          console.log('did');   
    }
    render(): React.ReactNode {
        return <div>a</div>
    }
    getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>) {
        console.log(prevProps);
        console.log(prevState);
    }
}

export default TabContent;