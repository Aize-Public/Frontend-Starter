import { Grid } from '@material-ui/core';
import React from 'react';


export interface DiscoverProductsProps {
    banner: JSX.Element,
    search: JSX.Element,
    productlist: JSX.Element
}

export class DiscoverProducts extends React.Component<DiscoverProductsProps> {

    constructor(props: DiscoverProductsProps) {
        super(props);
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    {this.props.banner}
                </Grid>
                <Grid item xs={12}>
                    {this.props.search}
                </Grid>
                <Grid item xs={12}>
                    {this.props.productlist}
                </Grid>
            </Grid>
        );
    }
}