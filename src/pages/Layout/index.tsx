import React from 'react';

abstract class Layout {
	protected header: React.ReactNode;
	protected content: React.ReactNode;
	protected footer: React.ReactNode;
	constructor(header: React.ReactNode, content: React.ReactNode, footer: React.ReactNode) {
		this.header = header;
		this.content = content;
		this.footer = footer;
	}
	public render() {
		return (
			<>
				{/* {this.renderHeader()}
				{this.renderContent()}
				{this.renderFooter()} */}
			</>
		);
	}
	protected abstract renderHeader(): React.ReactNode;
	protected abstract renderContent(): React.ReactNode;
	protected abstract renderFooter(): React.ReactNode;
	protected onRender(): void {}
}
export class FirstLayout extends Layout {
    // constructor(header: React.ReactNode, content: React.ReactNode, footer: React.ReactNode) {
    //     super(header, content, footer);
    //     // this.message = message;
    //   }
    protected renderHeader(): React.ReactNode {
        return this.header
    }
    protected renderContent(): React.ReactNode {
        return this.content
    }
    protected renderFooter(): React.ReactNode {
        return this.footer
    }
	

    public render() {
        super.render();
        return(
            <div> 
            {this.renderHeader()}    
            {this.renderContent()}    
            {this.renderFooter()}    
            </div>
        )
        // console.log(this.message);
      }
}
