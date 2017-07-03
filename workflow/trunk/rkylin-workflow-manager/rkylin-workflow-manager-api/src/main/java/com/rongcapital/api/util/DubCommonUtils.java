package com.rongcapital.api.util;

import java.util.Map;

import com.rongcapital.api.pojo.DubBaseResponse;

/**
 * @Description:
 *
 * @author       likun
 * @Create Time: 2016年5月12日下午4:46:03
 */
public class DubCommonUtils {
	
	/**
	 * 返回调用结果
	* @Title: getResult
	* @param flag 结果成功还是失败
	* @param retcode 结果编码
	* @param retmsg 结果消息
	* @param map 数据对象
	* @return
	* @date 2016年10月14日 上午11:05:14
	 */
	public static DubBaseResponse  getResult(boolean flag,String retcode,String retmsg,Map<String,Object> map){
		DubBaseResponse drJson=new DubBaseResponse();
		drJson.setIsSuccess(flag);
		drJson.setRetcode(retcode);
		drJson.setRetmsg(retmsg);
		drJson.setData(map);
		return drJson;
	}
	
	/**
	 * 返回调用结果
	* @Title: getResult
	* @param flag 结果成功还是失败
	* @param retcode 结果编码
	* @param retmsg 结果消息
	* @return
	* @date 2016年10月14日 上午11:05:14
	 */
	public static DubBaseResponse  getResult(boolean flag,String retcode,String retmsg){
		DubBaseResponse drJson=new DubBaseResponse();
		drJson.setIsSuccess(flag);
		drJson.setRetcode(retcode);
		drJson.setRetmsg(retmsg);
		return drJson;
	}


}
