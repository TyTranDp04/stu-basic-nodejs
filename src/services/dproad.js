import { DpRoadDatabase } from '../database/dproad.js';

export const DpRoadService = {

  get() {
    return new Promise((resolve, reject) => {
      DpRoadDatabase.get()
        .then((response) => {
          resolve({
            statusCode: 200,
            message: "Get list data successfully",
            data: response,
            success: true,
          });
        }).catch((error) => {
          reject(error);
        })

    })
  },

  create(body) {
    let newPostObj = body;
    return new Promise((resolve, reject) => {
      DpRoadDatabase.create(newPostObj)
        .then((response) => {
          resolve({
            statusCode: 200,
            message: "New data created successfully",
            data: response,
            success: true,
          });
        }).catch((error) => {
          reject({
            statusCode: 404,
            message: error.reason,
            data: null,
            success: false,
          });
        })

    })
  },

  update(param, obj) {
    return new Promise((resolve, reject) => {
      const _id = param._id;
      //  document id and obj is required
      if (_id && obj) {
        DpRoadDatabase.update(_id, obj)
          .then((response) => {
            resolve({
              statusCode: 200,
              message: "Data updated successfully",
              data: response,
              success: true,
            });
          }).catch((error) => {
            reject(error);
            console.log("error:", error);
          })
      }
    })
  }

}
