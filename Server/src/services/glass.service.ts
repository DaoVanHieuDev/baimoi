import db from "../utils/database";
export const getAll = async (keyStyle: number, keyMaterial: number) => {
  return db.execute(`call project_jbl.All_product_store(?,?)`, [
    keyStyle,
    keyMaterial,
  ]);
};
