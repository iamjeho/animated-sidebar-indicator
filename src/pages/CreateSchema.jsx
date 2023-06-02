import Header from "../components/Header";
import { Divider, TextField, Typography, Grid } from "@mui/material";

const CreateSchema = () => {
    return (
        <div>
            <Grid container spacing={3} columns={16}>
                <Grid item xs={6}>
                    <Typography variant="h4">스키마 생성</Typography>
                    <Typography>스키마 이름</Typography>
                    <TextField id="outlined-disabled" label="스키마 이름" />
                    <Typography>버전</Typography>
                    <TextField id="outlined-disabled" label="버전" />
                    <Typography>속성</Typography>
                    <TextField id="outlined-disabled" label="속성" />
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item xs={6}>
                    <Typography variant="h4">스키마 목록</Typography>
                    <Typography>test</Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default CreateSchema;
