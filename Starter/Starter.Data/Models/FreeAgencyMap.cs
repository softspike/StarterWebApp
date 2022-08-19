using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using System.Threading.Tasks;
using Starter.Data.Entities;

namespace Starter.Data.Models
{
    public class FreeAgencyMap : Profile
    {
        public FreeAgencyMap()
        {
            CreateMap<FreeAgency, FreeAgencyListItem>()
                //.ForMember(x => x.Country, opt => opt.MapFrom(src => src.Country.Name))
                .ForMember(x => x.Lat, opt => opt.MapFrom(src => src.Longitude))
                .ForMember(x => x.Lat, opt => opt.MapFrom(src => src.Latitude))
                .ForMember(x => x.Name, opt => opt.MapFrom(src => src.Name))
                ;

           CreateMap<FreeAgency, FreeAgencyResponse>()
                //.ForMember(x => x.Country, opt => opt.MapFrom(src => ListItem.Get(src.Country.Id, src.Country.Code, src.Country.Name)))
                .ForMember(x => x.Long, opt => opt.MapFrom(src => src.Longitude))
                .ForMember(x => x.Lat, opt => opt.MapFrom(src => src.Latitude))
                .ForMember(x => x.Name, opt => opt.MapFrom(src => src.Name))
                ;




        }








    }
}
