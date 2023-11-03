import db from "../utils/database";

export const getOne = async (id: number) => {
  return db.execute(`call project_jbl.detail(?)`, [id]);
};
