package com.rongcapital.dubbo.service.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.rongcapital.api.pojo.DubBaseRequestJson;
import com.rongcapital.api.pojo.DubBaseResponse;
import com.rongcapital.api.service.BaseDubboDojob;
import com.rongcapital.api.service.WfDubBaseService;
import com.rongcapital.api.util.DubCommonUtils;
import com.rongcapital.example.util.CommonUtil;
import com.rongcapital.example.util.WriteLogUtil;
import com.rongcapital.utils.SpringBeanUtils;

@Service("wfDubBaseService")
public class DubBaseServiceImpl implements WfDubBaseService {
	
	private static Logger logger = LoggerFactory.getLogger(DubBaseServiceImpl.class);

	@Override
	public DubBaseResponse workflowApi(DubBaseRequestJson dubBaseRequestJson) {
		DubBaseResponse dubBaseResponse = null;
		String model = "【工作流系统】 ";
		String logNo = CommonUtil.get16Random();
		String interfaceName = "";//接口名称
		try {
			interfaceName = dubBaseRequestJson.getMap().get("interfaceName").toString();
			
			WriteLogUtil.writeLog(logger, logNo, WriteLogUtil.START,model+interfaceName,dubBaseRequestJson.toString());
			BaseDubboDojob baseDubboDojob = (BaseDubboDojob) SpringBeanUtils.getBean(interfaceName);
			dubBaseResponse = baseDubboDojob.doJob(dubBaseRequestJson);
		} catch (Exception e) {
			e.printStackTrace();
			dubBaseResponse = DubCommonUtils.getResult(false, "s1", "工作流系统异常");
		} finally {
			WriteLogUtil.writeLog(logger, logNo, WriteLogUtil.END,model+interfaceName, dubBaseResponse);
		}
		return dubBaseResponse;
	}

}
