import React from "react";
import {
  FlexGrid,
  Col,
  AboutWrapper,
  Heading,
  ImgWrap,
  Img,
  AboutText,
} from "./AboutElements";
import { Grid, Box, Container, requirePropFactory } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@material-ui/core/styles";
import { Selfie } from "../../images/selfie-compressed.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#1a1a1a",
  },
}));

const ImageBox = styled(Box)({
  display: "flex",
  backgroundColor: "#1a1a1a",
});

export const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" style={{ height: "1000px" }}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignitems="center"
          spacing={3}
        >
          <Grid item xs={12}>
            <Heading>About me</Heading>
          </Grid>
          <Grid item md={3} sm={3}>
            <ImgWrap>
              <Img src={require("../../images/selfie-compressed.jpg")} />
            </ImgWrap>
          </Grid>
          <Grid item md={9} sm={12}>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="flex-start"
              style={{ height: "100%" }}
            >
              <Grid item>
                <AboutText style={{ marginTop: "0px", color: "#fff" }}>
                  I am currently a fourth year student at the MSc Interaction
                  technology and design programme at Umeå University, Sweden.
                  Cornerstones of the programme are UX-design, interactivity and
                  accessability but also software development in a wide range of
                  different technologies. My main interests are both front-end
                  and back-end development as well as AI and UX-design. I'm
                  always curious towards new technology and I'm always ready to
                  learn new things.
                </AboutText>
              </Grid>
              <Grid item>
                <h1>Ikoner här</h1>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>

    // <Container class="container">
    //   <AboutWrapper class="wrapper">
    //     <FlexGrid class="grid">
    //       <Col class="col">
    //         <h1>hejhej</h1>
    //       </Col>
    //       <Col>
    //         <h1>hejdå</h1>
    //       </Col>
    //     </FlexGrid>
    //   </AboutWrapper>
    // </Container>
  );
};

export default About;
