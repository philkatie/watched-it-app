import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { Grid } from "semantic-ui-react";

export default function HomePage({user, handleLogout}) {
    return (
        <Grid centered>
            <Grid.Row>
                <Grid.Column>
                    <Header handleLogout={handleLogout} user={user} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}