    import React from "react";
    import { Container, Box, Typography, Grid, Stack, useTheme } from "@mui/material";
    import ProcessStepCard from "./ProcessStepCard";
    import ProcessDetailItem from "./ProcessDetailItem";

    export default function JourneySnapshot() {
    const theme = useTheme();

    // 🔥 DATA MOVED INSIDE THIS FILE
    const DATA = {
        title: "Your Journey With KalaKruti",
        description:
        "We follow a simple, transparent, and structured process to turn your space into a beautifully designed home.",

        processSteps: [
        {
            id: 1,
            stepNumber: 1,
            title: "Meeting",
            description:
            "We begin by understanding your requirements, lifestyle, and vision for your home.",
        },
        {
            id: 2,
            stepNumber: 2,
            title: "Client Visit",
            description:
            "A detailed discussion at your location or our studio to refine ideas and explore design possibilities.",
        },
        {
            id: 3,
            stepNumber: 3,
            title: "Measurement",
            description:
            "Accurate on-site measurements are taken to begin layout planning and design execution.",
        },
        {
            id: 4,
            stepNumber: 4,
            title: "Quotation",
            description:
            "A transparent quotation is shared based on materials, layout, and scope of work.",
        },
        {
            id: 5,
            stepNumber: 5,
            title: "Start the Work",
            description:
            "Once approved, the project begins with structured scheduling and work allocation.",
        },
        ],

        processDetails: {
        sectionTitle: "Execution Stages",
        description:
            "After the planning stage, the actual transformation begins. Each stage is managed by experts to ensure quality and precision.",
        steps: [
            {
            id: 1,
            title: "Civil Work",
            description:
                "Structural modifications, flooring changes, plumbing, and wall preparation.",
            },
            {
            id: 2,
            title: "Electrical Work",
            description:
                "Lighting points, wiring, switchboards, and load planning as per design.",
            },
            {
            id: 3,
            title: "Ceiling Work",
            description:
                "False ceiling installation, lighting profiles, and decorative elements.",
            },
            {
            id: 4,
            title: "Furniture",
            description:
                "Factory-finished modular furniture installation with precision and detailing.",
            },
            {
            id: 5,
            title: "Hand Over",
            description:
                "A complete walkthrough is conducted and your beautifully finished home is handed over.",
            },
        ],
        },
    };

    return (
        <Container maxWidth="lg" sx={{ pt: 2, pb: 6, px: { xs: 2, md: 4 } }}>
        <Box
            sx={{
            backgroundColor: theme.palette.background.default,
            borderRadius: 3,
            p: { xs: 3, md: 5 },
            mx: { xs: -2, md: 0 },
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
            }}
        >
            {/* Title + Description */}
            <Box sx={{ textAlign: "left", mb: 6 }}>
            <Typography
                variant="h2"
                component="h2"
                sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: "bold",
                color: theme.palette.text.primary,
                mb: 2
                }}
            >
                {DATA.title}
            </Typography>
            <Typography
                variant="body1"
                sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                color: theme.palette.text.secondary,
                lineHeight: 1.6,
                maxWidth: "800px"
                }}
            >
                {DATA.description}
            </Typography>
            </Box>

            <Grid container spacing={{ xs: 3, md: 6 }}>
            {/* LEFT COLUMN – PROCESS STEPS */}
            <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: { xs: 2, md: 1.5 },
                    flexWrap: { xs: "nowrap", md: "nowrap" },
                    justifyContent: { xs: "stretch", md: "space-between" },
                  }}
                >
                  {DATA.processSteps.map((step) => (
                    <Box
                      key={step.id}
                      sx={{
                        flex: { xs: "1 1 100%", md: "1 1 0" },
                        minWidth: { xs: "100%", md: 0 },
                        maxWidth: { xs: "100%", md: "20%" },
                      }}
                    >
                      <ProcessStepCard
                        stepNumber={step.stepNumber}
                        title={step.title}
                        description={step.description}
                      />
                    </Box>
                  ))}
                </Box>
            </Grid>

            {/* RIGHT COLUMN – EXECUTION DETAILS */}
            <Grid item xs={12} md={6}>
                <Box sx={{ pl: { xs: 0, md: 4 } }}>
                <Typography
                    variant="h4"
                    component="h3"
                    sx={{
                    fontSize: { xs: "1.5rem", md: "1.8rem" },
                    fontWeight: "bold",
                    color: theme.palette.text.primary,
                    mb: 3
                    }}
                >
                    {DATA.processDetails.sectionTitle}
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                    color: theme.palette.text.secondary,
                    lineHeight: 1.6,
                    mb: 4,
                    fontSize: "1rem"
                    }}
                >
                    {DATA.processDetails.description}
                </Typography>

                <Stack spacing={3}>
                    {DATA.processDetails.steps.map((item) => (
                    <ProcessDetailItem
                        key={item.id}
                        title={item.title}
                        description={item.description}
                    />
                    ))}
                </Stack>
                </Box>
            </Grid>
            </Grid>
        </Box>
        </Container>
    );
    }
