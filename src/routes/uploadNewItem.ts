import { Router } from "express";
import multer from "multer";
import NewItem from "../model/newItemModel";

const router = Router();

// Multer config for file upload
let storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "/tmp/uploads/");
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

// Multer config for file upload
let upload = multer({
	storage,
	limits: { fileSize: 1000000 * 50 }, // 50mb
}).single("Datafile");

router.post("/upload", (req, res) => {
	upload(req, res, async (err) => {
		if (!req.file) {
			return res.status(400).json({ error: "No file uploaded" });
		}
		if (err) {
			res.status(500).json({
				message: "Internal Server Error",
				error: err,
			});
		}
		// Create new item and save it to the database
		const uploadNewItem = new NewItem({
			name: req.body.name,
			price: req.body.price,
			offer: req.body.offer,
			description: req.body.description,
			item: req.body.item,
		});

		const response = await uploadNewItem.save();
    return res.status(200).json({ message: "Item uploaded successfully" });
	});
});

export default router;
