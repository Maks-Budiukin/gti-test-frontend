import { defineStore } from "pinia";
import axios from "axios";

const axiosRequests = axios.create({
  baseURL: "https://gti-test-backend.vercel.app/api/",
});

export const useRequestsStore = defineStore("requests", {
  state: () => ({ requests: [] }),

  actions: {
    //READ
    async getRequests() {
      try {
        const { data } = await axiosRequests.get("parcels");
        this.requests = data;
      } catch (error) {
        console.log("ERROR MESSAGE:", error.message);

        return error;
      }
    },

    //CREATE
    async addRequest(addData) {
      try {
        const { data } = await axios.post("parcels", addData);
        this.requests = [...this.requests, data];
      } catch (error) {
        console.log("ERROR MESSAGE:", error.message);

        return error;
      }
    },

    //UPDATE
    async editRequest(editData, id) {
      try {
        const { data } = await axios.patch(`parcels/${id}`, editData);
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
        const { data } = await axios.delete(`parcels/${id}`);
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
