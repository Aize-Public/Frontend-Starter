import { Grid } from '@material-ui/core';
import React from 'react';


export interface SplitLayoutProps {
    navBar: JSX.Element,
    leftSide: JSX.Element,
    rightSide: JSX.Element
}

export class SplitLayout extends React.Component<SplitLayoutProps> {

    constructor(props: SplitLayoutProps) {
        super(props);
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div style={{height:'100%'}}>
                {this.props.navBar}
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        {this.props.leftSide}
                    </Grid>
                    <Grid item xs={4}>
                        {this.props.rightSide}
                    </Grid>
                </Grid>
            </div>
        );
    }
}