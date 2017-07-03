package com.rongcapital.api.pojo;

import java.io.Serializable;
import java.util.Map;

/**
 * @Description:
 * 
 * @author likun
 * @Create Time: 2016年5月12日下午2:43:39
 */
public class DubBaseRequestJson implements Serializable {

	private static final long serialVersionUID = 1L;

	private Map<String,Object> map;

	public Map<String, Object> getMap() {
		return map;
	}

	public void setMap(Map<String, Object> map) {
		this.map = map;
	}

	@Override
	public String toString() {
		return "DubBaseRequestJson [map=" + map + "]";
	}

}
