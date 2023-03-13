import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/system";

const AnswerSkeleton = () => {
  const theme = useTheme();
  return (
    <Stack sx={{ marginBottom: 2 }}>
      <Skeleton
        variant="rectangular"
        height={144}
        sx={{
          borderTopLeftRadius: theme.spacing(2),
          borderTopRightRadius: theme.spacing(2),
        }}
      />
      <Skeleton
        variant="text"
        height={72}
        sx={{
          borderBottomLeftRadius: theme.spacing(2),
          borderBottomRightRadius: theme.spacing(2),
        }}
      />
    </Stack>
  );
};

export default AnswerSkeleton;
