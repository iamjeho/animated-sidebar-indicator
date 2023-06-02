import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Header from "../components/Header";

const CreateAdmin = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <Grid item>
                <Button
                    variant="contained"
                    size="large"
                    startIcon={<AddIcon />}
                >
                    관리자 생성
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5">관리자 DID</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5">관리자 키값</Typography>
            </Grid>
        </div>
    );
};

export default CreateAdmin;
