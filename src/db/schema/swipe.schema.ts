import { SchemaFactory } from "@nestjs/mongoose";
import { Swipe } from "src/interfaces/swipe.interface";

export const SwipeSchema = SchemaFactory.createForClass(Swipe);