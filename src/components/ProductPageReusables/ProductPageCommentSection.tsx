// components/ProductPage/CommentSection.tsx
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  useTheme,
} from "@mui/material";
import ProductPageConstantComment from "./ProductPageConstantComment";

const CommentSection = ({
  score,
  onScoreChange,
}: {
  score: string;
  onScoreChange: (e: any) => void;
}) => {
  const theme = useTheme();

  return (
    <Box component="footer" sx={{ p: 3, borderRadius: "10px" }}>
      <Grid container spacing={4}>
        <ProductPageConstantComment />

        <Grid sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Stack spacing={3}>
            <FormControl fullWidth>
              <InputLabel id="score-select-label">امتیاز</InputLabel>
              <Select
                labelId="score-select-label"
                id="score-select"
                value={score}
                onChange={onScoreChange}
                label="امتیاز"
                sx={{ bgcolor: theme.palette.background.paper }}
              >
                <MenuItem value="">
                  <em>انتخاب امتیاز</em>
                </MenuItem>
                {[1, 2, 3, 4, 5].map((val) => (
                  <MenuItem key={val} value={val}>
                    {val}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              id="comment-textfield"
              label="نظر"
              multiline
              rows={4}
              placeholder="نظر خود را وارد نمایید"
              fullWidth
              sx={{ bgcolor: theme.palette.background.paper }}
            />
          </Stack>

          <Button
            variant="contained"
            sx={{ backgroundColor: "#DB2777", width: "fit-content" }}
          >
            ثبت نظر
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CommentSection;
