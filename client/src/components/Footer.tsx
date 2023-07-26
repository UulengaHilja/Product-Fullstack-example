import { Box, Typography, Link } from "@mui/material";
import { LinkedIn, Twitter, Facebook } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      className="footer"
      sx={{
        backgroundColor: "#333",
        color: "#fff",
        padding: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="body2" component="p">
        Contact Us: Talohole.com
      </Typography>
      <Box>
        <Link href="https://www.linkedin.com/" target="_blank" rel="noopener">
          <LinkedIn sx={{ marginRight: "1rem" }} />
        </Link>
        <Link href="https://twitter.com/" target="_blank" rel="noopener">
          <Twitter sx={{ marginRight: "1rem" }} />
        </Link>
        <Link href="https://www.facebook.com/" target="_blank" rel="noopener">
          <Facebook />
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
