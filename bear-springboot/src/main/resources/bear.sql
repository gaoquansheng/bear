/*
 Navicat Premium Data Transfer

 Source Server         : bear
 Source Server Type    : MySQL
 Source Server Version : 80019
 Source Host           : localhost:3306
 Source Schema         : bear

 Target Server Type    : MySQL
 Target Server Version : 80019
 File Encoding         : 65001

 Date: 09/04/2020 11:20:55
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `userName` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL COMMENT '姓名',
  `userPwd` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `isAdmin` int(0) DEFAULT NULL,
  `userTel` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `userId` int(0) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`userId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 25 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('lisi', '211', 1, '', 16);
INSERT INTO `user` VALUES ('mmgg', '123123', 0, '13423456789', 20);
INSERT INTO `user` VALUES ('wangwu', '123123', 1, '', 21);
INSERT INTO `user` VALUES ('wangba', '123123', 1, '', 22);
INSERT INTO `user` VALUES ('yangzai', '123123', 0, '15523452345', 23);
INSERT INTO `user` VALUES ('angzai', '123123', 1, '', 24);

-- ----------------------------
-- Table structure for video
-- ----------------------------
DROP TABLE IF EXISTS `video`;
CREATE TABLE `video`  (
  `userName` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `url` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `lat` float(10, 0) DEFAULT NULL,
  `lng` float(10, 0) DEFAULT NULL,
  `startTime` datetime(0) DEFAULT NULL,
  `flag` int(0) DEFAULT NULL,
  `fileName` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of video
-- ----------------------------
INSERT INTO `video` VALUES ('meng', NULL, 'rtmp://localhost:1935/live/meng', 24, 35, '2020-04-03 13:07:09', 0, 'rtmp://localhost:1935/vod/meng-1585890429.flv');
INSERT INTO `video` VALUES ('meng', NULL, 'rtmp://localhost:1935/live/meng', 24, 35, '2020-04-03 13:07:09', 0, 'rtmp://localhost:1935/vod/meng-1585890687.flv');
INSERT INTO `video` VALUES ('meng', NULL, 'rtmp://localhost:1935/live/meng', 24, 35, '2020-04-03 13:07:09', 0, 'rtmp://localhost:1935/vod/meng-1585890033.flv');
INSERT INTO `video` VALUES ('meng', NULL, 'rtmp://localhost:1935/live/meng', 24, 35, '2020-04-03 13:07:09', 0, 'rtmp://localhost:1935/vod/meng-1585889920.flv');
INSERT INTO `video` VALUES ('bear', NULL, 'rtmp://localhost:1935/live/bear', 12, 13, '2020-04-08 16:31:03', 0, '/vod/bear-1586334663.flv');
INSERT INTO `video` VALUES ('bear', NULL, 'rtmp://localhost:1935/live/bear', 12, 13, '2020-04-08 16:32:28', 0, '/vod/bear-1586334748.flv');
INSERT INTO `video` VALUES ('bear', NULL, 'rtmp://localhost:1935/live/bear', 12, 13, '2020-04-08 23:26:18', 0, '/vod/bear-1586359577.flv');
INSERT INTO `video` VALUES ('lisi', NULL, 'rtmp://localhost:1935/live/lisi', 12, 13, '2020-04-08 23:28:43', 0, 'rtmp://localhost:1935/vod/lisi-1586359723.flv');
INSERT INTO `video` VALUES ('lisi', NULL, 'rtmp://localhost:1935/live/lisi', 12, 13, '2020-04-09 11:09:54', 0, 'rtmp://localhost:1935/vod/lisi-1586401794.flv');

SET FOREIGN_KEY_CHECKS = 1;
