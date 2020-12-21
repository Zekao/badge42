/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.tsx                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jaeskim <jaeskim@student.42seoul.kr>       +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/10/17 19:00:33 by jaeskim           #+#    #+#             */
/*   Updated: 2020/12/22 01:21:58 by jaeskim          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from "react";
import fs from "fs";
import _ from "lodash";
import { get42UserData, get42UserCursusData } from "../../api/api42";
import getRemainDay from "../../util/getRemainDay";
import SvgContainer from "../SvgContainer";
import Blackhole from "./Blackhole";
import Cursus from "./Cursus";
import Header from "./Header";
import Information from "./Information";
import Level from "./Level";
import Logo from "./Logo";
import GlobalStyle from "../GlobalStyle";

interface Props {
  userData: get42UserData;
  logo: string | null;
  privacyEmail: boolean;
  cursusName: string | null;
  cover?: string | null;
}

const Stats: React.FC<Props> = ({
  userData,
  logo,
  privacyEmail,
  cursusName,
  cover,
}) => {
  var height = 195;
  const {
    info: { login, email, campus, first_name, last_name },
    coalition,
    cursus,
  } = userData;

  var index = _.findIndex<get42UserCursusData>(cursus, {
    cursus: { name: cursusName },
  });
  const {
    blackholed_at,
    begin_at,
    end_at,
    cursus: { name: cursus_name, slug: cursusSlug },
    grade,
    level,
  } = cursus[index == -1 ? 0 : index];
  const isPiscine = cursusSlug.includes("piscine");

  const _color = isPiscine ? null : coalition[0].color;
  const color =
    _color != null
      ? _color.substring(0, 1) == "#"
        ? _color
        : "#" + _color
      : "#00BABC";

  // TODO: end_at이 null이 아닌 경우 언제 종료 했는지 보여주어야 함.
  const blackholeRemain = getRemainDay(blackholed_at);

  if (privacyEmail == true) height -= 25;

  return (
    <SvgContainer cover={cover} color={color} width={495} height={height}>
      <GlobalStyle />
      {!isPiscine && <Logo logo={logo} />}
      <Header name={login} cpusName={campus[0].name} isPiscine={isPiscine} />
      <Cursus cursusName={cursus_name} />
      <Information
        privacyEmail={privacyEmail}
        email={email}
        name={(first_name + " " + last_name).trim()}
        grade={isPiscine || !grade ? "Novice" : grade}
      />
      <Blackhole
        blackholeRemain={blackholeRemain}
        beginAt={begin_at}
        endAt={end_at}
      />
      <Level level={level} color={color} height={height} />
    </SvgContainer>
  );
};

export default Stats;
