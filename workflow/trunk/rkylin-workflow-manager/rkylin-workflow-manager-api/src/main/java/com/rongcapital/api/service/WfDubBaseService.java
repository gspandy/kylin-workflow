package com.rongcapital.api.service;

import com.rongcapital.api.pojo.DubBaseRequestJson;
import com.rongcapital.api.pojo.DubBaseResponse;

public interface WfDubBaseService {

	/**
	 * 工作流接口
	 * @param dubBaseRequestJson
	 * @return DubBaseResponse
	 */
	DubBaseResponse workflowApi(DubBaseRequestJson dubBaseRequestJson);
}
