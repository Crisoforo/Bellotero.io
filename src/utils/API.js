import axios from "axios";

export default {
  getHeader: function() {
    return axios.get(
      "https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/app.json"
    );
  },
  getContent: function() {
    return axios.get(
      "https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json"
    );
  },
  getConfig: function() {
    return axios.get(
      "https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page2.json"
    );
  }
};
