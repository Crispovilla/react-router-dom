import { Image, Box } from "@chakra-ui/react";
import { useRouteError, Link } from "react-router-dom";

import error404 from "../assets/error-404.svg";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Box id="error-page">
      <Image
        boxSize={{ base: "200px", sm: "200px", lg: "400px" }}
        mt="40px"
        src={error404}
        alt="404-error"
      />
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error && (error.statusText || error.message)}</i>
      </p>
      <Link to="/">Volver a inicio</Link>
    </Box>
  );
}
