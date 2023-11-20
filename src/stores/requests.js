import { defineStore } from "pinia";
import axios from "axios";

export const useRequestsStore = defineStore("requests", {
  state: () => ({ requests: [] }),

  actions: {
    //READ
    async getRequests() {
      try {
        const { data } = await axios.get("http://localhost:4000/api/parcels");
        this.requests = data;
      } catch (error) {
        console.log("ERROR MESSAGE:", error.message);

        return error;
      }
    },

    //CREATE
    async addRequest(addData) {
      try {
        const { data } = await axios.post(
          "http://localhost:4000/api/parcels",
          addData
        );
        this.requests = [...this.requests, data];
      } catch (error) {
        console.log("ERROR MESSAGE:", error.message);

        return error;
      }
    },

    //UPDATE
    async editRequest(editData, id) {
      try {
        const { data } = await axios.patch(
          `http://localhost:4000/api/parcels/${id}`,
          editData
        );
        const updatedRequests = this.requests.map((request) =>
          request._id === data._id ? data : request
        );
        this.requests = updatedRequests;
      } catch (error) {
        console.log("ERROR MESSAGE:", error.message);

        return error;
      }
    },

    //DELETE
    async deleteRequest(id) {
      try {
        const { data } = await axios.delete(
          `http://localhost:4000/api/parcels/${id}`
        );
        const filteredRequests = this.requests.filter(
          (request) => request._id !== data._id
        );
        this.requests = filteredRequests;
      } catch (error) {
        console.log("ERROR MESSAGE:", error.message);

        return error;
      }
    },
  },
});
