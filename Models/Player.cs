using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FantasyWatch.Models
{
	public class Player
	{
		/// <summary>
		/// Type of player
		/// </summary>
		public PlayerType PType
		{
			get;
			private set;
		}

		public Player(PlayerType type)
		{
			PType = type;
		}
	}
}