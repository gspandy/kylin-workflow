package com.rongcapital.api.pojo;

import java.io.Serializable;
import java.util.Map;

/**
 * @Description:
 *
 * @author       likun
 * @Create Time: 2016年4月2日下午6:33:51
 */
public class DubBaseResponse implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private boolean  isSuccess;
	private java.lang.String  retcode;
	private java.lang.String  retmsg;
	private Map<String,Object>  data;
	
	public boolean getIsSuccess() {
		return isSuccess;
	}
	public void setIsSuccess(boolean isSuccess) {
		this.isSuccess = isSuccess;
	}
	public java.lang.String getRetcode() {
		return retcode;
	}
	public void setRetcode(java.lang.String retcode) {
		this.retcode = retcode;
	}
	public java.lang.String getRetmsg() {
		return retmsg;
	}
	public void setRetmsg(java.lang.String retmsg) {
		this.retmsg = retmsg;
	}
	public Map<String, Object> getData() {
		return data;
	}
	public void setData(Map<String, Object> data) {
		this.data = data;
	}
	
	@Override
	public String toString() {
		return "DubBaseResponse [isSuccess=" + isSuccess + ", retcode="
				+ retcode + ", retmsg=" + retmsg + ", data=" + data + "]";
	}
	
	
}
