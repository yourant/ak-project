package com.yunjian.ak.dao.annotation;

/**
 * @Description:
 * @Author: yong.sun
 * @Date: 2019/5/22 11:09
 * @Version 1.0
 */
public enum ColumnType {
    normal,
    uuid,
    increment,
    incrementLong,
    custom;

    private ColumnType() {
    }
}
