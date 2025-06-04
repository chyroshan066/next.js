import { PORT } from "./schemas/env.schema";
import { app } from "./server/app";

app.listen(PORT, () => {
    console.log(`Server listening at PORT: ${PORT}`);
});