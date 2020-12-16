/*
 Navicat Premium Data Transfer

 Source Server         : 阿里云
 Source Server Type    : MySQL
 Source Server Version : 80020
 Source Host           : 39.102.80.119:3306
 Source Schema         : bear

 Target Server Type    : MySQL
 Target Server Version : 80020
 File Encoding         : 65001

 Date: 05/11/2020 21:01:32
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `userName` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '姓名',
  `userPwd` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `isAdmin` int(0) NULL DEFAULT NULL,
  `userTel` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`userTel`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('单维锋', '123456', 0, '13426067568');
INSERT INTO `users` VALUES ('高魔', '123123', 0, '15516392388');
INSERT INTO `users` VALUES ('halo', '123123', 1, '15516392395');
INSERT INTO `users` VALUES ('yangzai', '123123', 0, '15523452345');

-- ----------------------------
-- Table structure for video
-- ----------------------------
DROP TABLE IF EXISTS `video`;
CREATE TABLE `video`  (
  `userTel` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `url` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `lat` float(10, 0) NULL DEFAULT NULL,
  `lng` float(10, 0) NULL DEFAULT NULL,
  `startTime` datetime(0) NULL DEFAULT NULL,
  `flag` int(0) NULL DEFAULT NULL,
  `endTime` datetime(0) NULL DEFAULT NULL,
  `videoUrl` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `videoId` int(0) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`videoId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of video
-- ----------------------------
INSERT INTO `video` VALUES ('15516392388', '测试一下1', 'rtmp://39.102.80.119:1935/live/15516392388', 40, 116, '2020-08-05 10:53:00', 0, '2020-08-05 10:53:45', 'rtmp://39.102.80.119:1935/vod/15516392388-1596595980_.flv', 10);
INSERT INTO `video` VALUES ('15516392388', '测试一下1', 'rtmp://39.102.80.119:1935/live/15516392388', 40, 116, '2020-08-05 11:07:23', 0, '2020-08-05 11:08:06', 'rtmp://39.102.80.119:1935/vod/15516392388-1596596842_.flv', 11);
INSERT INTO `video` VALUES ('15516392388', '测试一下3', 'rtmp://39.102.80.119:1935/live/15516392388', 40, 116, '2020-08-05 11:08:13', 0, '2020-08-05 11:08:35', 'rtmp://39.102.80.119:1935/vod/15516392388-1596596893_.flv', 12);
INSERT INTO `video` VALUES ('15516392388', '测试一下4', 'rtmp://39.102.80.119:1935/live/15516392388', 40, 116, '2020-08-05 11:13:05', 0, '2020-08-05 11:13:17', 'rtmp://39.102.80.119:1935/vod/15516392388-1596597185_.flv', 13);
INSERT INTO `video` VALUES ('13426067568', NULL, 'rtmp://39.102.80.119:1935/live/13426067568', 40, 117, '2020-09-02 15:24:17', 0, '2020-09-02 15:24:44', 'rtmp://39.102.80.119:1935/vod/13426067568-1599031457_.flv', 14);

SET FOREIGN_KEY_CHECKS = 1;
