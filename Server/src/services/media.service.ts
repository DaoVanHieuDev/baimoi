import db from "../utils/database";

export const getMedia = async (id: number) => {
  return db.execute(`call project_jbl.media_detail(?)`, [id]);
};
