import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';


@Component({
  selector: 'app-channellist',
  templateUrl: './channellist.component.html',
  styleUrls: ['./channellist.component.scss']
})
export class ChannellistComponent implements OnInit {

  channels: any;

  constructor(private getData: GetDataService) { }

  ngOnInit() {
    this.getData.getChannels().subscribe((response) => {
      this.channels = response;
      this.sortChannels();
      let tempDate = '';
      this.channels = this.channels.map((channel, index) => {
        if (tempDate === '') {
          tempDate = channel.time.split(' ')[0];
          channel.sectionFirst = true;
        } else if (tempDate !== channel.time.split(' ')[0]) {
          this.channels[index - 1].sectionLast = true;
          channel.sectionFirst = true;
          tempDate = channel.time.split(' ')[0];
        }
        return channel;
      });
      console.log(this.channels);
    });
  }
 // Sort the list by date
  sortChannels() {
    this.channels.sort(function (channel1, channel2) {
      if (channel1.time < channel2.time) {
        return -1;
      } else if (channel1.time > channel2.time) {
        return 1;
      } else {
        return 0;
      }
    });
  }

}
