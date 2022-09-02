using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using System.Threading.Tasks;
using Starter.Data.Entities;
using Starter.Data.Models;

namespace Starter.Data.Maps
{
    public class FreeAgencyMap : Profile
    {
        public FreeAgencyMap()
        {

            CreateMap<FreeAgencyModel, FreeAgency>()
              .ForMember(x => x.Id, opt => opt.MapFrom(src => src.Id))
              .ForMember(x => x.PlayerId, opt => opt.MapFrom(src => src.PlayerId))
               .ForMember(x => x.CountryId, opt => opt.MapFrom(src => src.Country.Id))
               .ForMember(x => x.Country, opt => opt.Ignore())
               .ForMember(x => x.PostCode, opt => opt.MapFrom(src => src.PostCode))
               .ForMember(x => x.Latitude, opt => opt.MapFrom(src => src.Latitude))
               .ForMember(x => x.AgeGroup, opt => opt.MapFrom(src => src.AgeGroup))
               .ForMember(x => x.TournamentTypeId, opt => opt.MapFrom(src => src.TournamentTypeId))
               ;

            CreateMap<FreeAgency, FreeAgencyModel>()
                .ForMember(x => x.Name, opt => opt.MapFrom(src => src.Player.FullName))
                ;

            CreateMap<InvitationResponse, Invitations>()
                ;

            CreateMap<InvitationRequest, Invitations>()
                ;



        }








    }
}
