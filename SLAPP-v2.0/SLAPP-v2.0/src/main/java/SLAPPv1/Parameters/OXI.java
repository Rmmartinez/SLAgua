package SLAPPv1.Parameters;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="oxi", schema="SLAgua")
public class OXI {

	@Id
	@Column(name="id", table="oxi")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	@Column(name="oxi",nullable=false,table="oxi")
	private Float oxi;
	@Column(name="pool",nullable=false,table="oxi")
	private Long pool;
	@Column(name="year",nullable=false,table="oxi")
	private Long year;
	@Column(name="month",nullable=false,table="oxi")
	private Long month;
	@Column(name="day",nullable=false,table="oxi")
	private Long day;
	@Column(name="hour",nullable=false,table="oxi")
	private Long hour;
	@Column(name="minute",nullable=false,table="oxi")
	private Long minute;

	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Float getoxi() {
		return oxi;
	}
	public void setOxi(Float oxi) {
		this.oxi = oxi;
	}
	public Long getPool() {
		return pool;
	}
	public void setPool(Long pool) {
		this.pool = pool;
	}
	public Long getYear() {
		return year;
	}
	public void setYear(Long year) {
		this.year = year;
	}
	public Long getMonth() {
		return month;
	}
	public void setMonth(Long month) {
		this.month = month;
	}
	public Long getDay() {
		return day;
	}
	public void setDay(Long day) {
		this.day = day;
	}
	public Long getHour() {
		return hour;
	}
	public void setHour(Long hour) {
		this.hour = hour;
	}
	public Long getMinute() {
		return minute;
	}
	public void setMinute(Long minute) {
		this.minute = minute;
	}
	
}
