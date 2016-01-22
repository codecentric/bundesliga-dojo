package de.codecentric.dojo.bundesliga.data;

import java.io.Serializable;

public class TeamStanding implements Serializable, Comparable<TeamStanding> {

  public String name;
  public String scored;
  public String allowed;
  public String difference;
  public String points;

  @Override
  public int compareTo(final TeamStanding that) {
    final int diffPoints = Integer.valueOf(this.points) - Integer.valueOf(that.points);
    final int diffGoals = Integer.valueOf(this.difference) - Integer.valueOf(that.difference);

    return diffPoints == 0 ? diffGoals : diffPoints;
  }
}
